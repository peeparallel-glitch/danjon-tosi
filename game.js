// game.js
const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');
const msgText = document.getElementById('message-text');
const commandMenu = document.getElementById('command-menu');

// Assets
const images = {
    town: new Image(),
    inn: new Image(),
    shop: new Image(),
    arena: new Image(),
    enemy: new Image()
};
images.town.src = 'town.png';
images.inn.src = 'inn.png';
images.shop.src = 'shop.png';
images.arena.src = 'town.png'; 
images.enemy.src = 'goblin.png';

// Rivals Database
const rivals = [
    { name: 'ライバルのケン', hp: 80, maxHp: 80, atk: 12, def: 8, spd: 12, color: 'blue', intro: 'お前が噂の新入りか？手本を見せてやるよ！', win: 'ちっ、運が良かっただけだ！', lose: 'まだまだ修行が足りないな！' },
    { name: '剣士のリナ', hp: 140, maxHp: 140, atk: 20, def: 15, spd: 18, color: 'red', intro: 'その意気込みは良し。全力で来なさい。', win: 'お見事。あなたの実力を認めます。', lose: 'もっと自分を磨くのね。' }
];

// NPCs Database
const npcs = {
    mayor: { name: '町長', color: 'gray', dialogues: [
        "ようこそ、わが町へ。トーナメントでの活躍を期待しておるぞ。",
        "いよいよ明日が大会か。準備は怠るなよ。",
        "素晴らしい戦いだった！君こそがこの町の誇りだ！"
    ]},
    girl: { name: '町娘メイ', color: 'pink', dialogues: [
        "お兄さん、強そうだね！応援してるよ！",
        "大会に出る人たち、みんな怖そう……。怪我しないでね？",
        "すごーい！優勝おめでとう！"
    ]}
};

// Game State
const state = {
    location: 'town',
    subLocation: null, // NPCとの会話中など
    currentDay: 1,
    tournamentDay: 5, // フェーズ3では5日目に大会実施
    player: {
        name: 'アルド',
        lv: 1,
        hp: 100,
        maxHp: 100,
        mp: 20,
        maxMp: 20,
        atk: 15,
        def: 10,
        spd: 10,
        exp: 0,
        expToNext: 30,
        gold: 100
    },
    flags: {
        metMayor: false,
        trainingCount: 0,
        wonTournament: false
    },
    enemy: null,
    npc: null,
    turn: 'player',
    messageQueue: [],
    isTyping: false,
    miniGame: {
        active: false,
        timer: 0,
        target: 0
    }
};

function updateStatusUI() {
    document.getElementById('current-day').innerText = state.currentDay;
    document.getElementById('p-name').innerText = state.player.name;
    document.getElementById('p-lv').innerText = state.player.lv;
    document.getElementById('p-hp').innerText = state.player.hp;
    document.getElementById('p-maxhp').innerText = state.player.maxHp;
    document.getElementById('p-mp').innerText = state.player.mp;
    document.getElementById('p-maxmp').innerText = state.player.maxMp;
    document.getElementById('p-atk').innerText = state.player.atk;
    document.getElementById('p-def').innerText = state.player.def;
    document.getElementById('p-spd').innerText = state.player.spd;
    document.getElementById('p-exp').innerText = state.player.exp;
    document.getElementById('p-gold').innerText = state.player.gold;
}

function showMessage(text) {
    state.messageQueue.push(text);
    if (!state.isTyping) {
        processMessageQueue();
    }
}

function processMessageQueue() {
    if (state.messageQueue.length === 0) {
        state.isTyping = false;
        return;
    }
    state.isTyping = true;
    const currentText = state.messageQueue.shift();
    msgText.innerText = '';
    let i = 0;
    const interval = setInterval(() => {
        msgText.innerText += currentText[i];
        i++;
        if (i >= currentText.length) {
            clearInterval(interval);
            setTimeout(() => {
                processMessageQueue();
            }, 800); 
        }
    }, 20);
}

function setCommands(commands) {
    commandMenu.innerHTML = '';
    commands.forEach(cmd => {
        const btn = document.createElement('button');
        btn.className = 'command-btn';
        btn.innerText = cmd.label;
        btn.onclick = cmd.action;
        commandMenu.appendChild(btn);
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let bg = images.town;
    if (state.location === 'inn') bg = images.inn;
    if (state.location === 'shop' || state.location === 'training') bg = images.shop;
    if (state.location === 'arena' || state.location === 'battle') bg = images.arena;
    
    if (bg.complete && bg.naturalWidth !== 0) {
        ctx.drawImage(bg, 0, 0, 640, 320);
    } else {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 640, 320);
    }

    // NPC描画
    if (state.npc) {
        ctx.fillStyle = state.npc.color;
        ctx.fillRect(400, 100, 150, 200);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(400, 100, 150, 200);
    }

    // 敵描画
    if (state.location === 'battle' && state.enemy) {
        const enemyX = (640 - 200) / 2;
        const enemyY = (320 - 200) / 2;
        if (state.enemy.color) {
            ctx.fillStyle = state.enemy.color;
            ctx.fillRect(enemyX, enemyY, 200, 200);
        } else {
            ctx.drawImage(images.enemy, enemyX, enemyY, 200, 200);
        }
        ctx.fillStyle = 'black';
        ctx.fillRect(enemyX, enemyY - 20, 200, 10);
        ctx.fillStyle = 'red';
        const healthPercent = state.enemy.hp / state.enemy.maxHp;
        ctx.fillRect(enemyX, enemyY - 20, 200 * healthPercent, 10);
    }

    // ミニゲーム描画 (Training)
    if (state.miniGame.active) {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(100, 100, 440, 120);
        ctx.fillStyle = 'white';
        ctx.font = '20px monospace';
        ctx.fillText("タイミングよく[決定]！", 120, 130);
        
        // バー
        ctx.fillStyle = 'gray';
        ctx.fillRect(120, 160, 400, 20);
        
        // ターゲット
        ctx.fillStyle = 'yellow';
        ctx.fillRect(120 + (state.miniGame.target - 10), 160, 20, 20);
        
        // 移動するインジケーター
        ctx.fillStyle = 'cyan';
        ctx.fillRect(120 + state.miniGame.timer, 155, 5, 30);
    }
}

// ----------------------------------------------------
// Location Logics
// ----------------------------------------------------

function goToTown() {
    state.location = 'town';
    state.npc = null;
    const countdown = state.tournamentDay - state.currentDay;
    if (state.flags.wonTournament) {
        showMessage("活気あふれる優勝後の街だ！");
    } else if (countdown > 0) {
        showMessage(`街の広場。人々の期待が高まっている。(大会まであと ${countdown} 日)`);
    } else {
        showMessage("大会当日だ！闘技場で最強を証明しろ！");
    }
    
    setCommands([
        { label: '周辺の人と話す', action: talkToNPCs },
        { label: '宿屋 (回復/翌日)', action: goToInn },
        { label: '訓練所 (能力強化)', action: goToTrainingCenter },
        { label: '闘技場 (対戦する)', action: goToArena }
    ]);
}

function talkToNPCs() {
    showMessage("誰に話しかけますか？");
    setCommands([
        { label: '町長', action: () => talkTo('mayor', npcs.mayor) },
        { label: '町娘メイ', action: () => talkTo('girl', npcs.girl) },
        { label: '戻る', action: goToTown }
    ]);
}

function talkTo(id, data) {
    state.npc = data;
    let dialogueIdx = 0;
    if (state.flags.wonTournament) dialogueIdx = 2;
    else if (state.currentDay >= state.tournamentDay - 1) dialogueIdx = 1;

    showMessage(`${data.name}：「${data.dialogues[dialogueIdx]}」`);
    setCommands([
        { label: '次へ', action: goToTown }
    ]);
}

// ----------------------------------------------------
// Training Center (Mini-game)
// ----------------------------------------------------

function goToTrainingCenter() {
    state.location = 'training';
    showMessage("訓練所だ。厳しい修行がキミを強くする。");
    setCommands([
        { label: '剣の修行 (ATK)', action: () => startTraining('atk') },
        { label: '盾の修行 (DEF)', action: () => startTraining('def') },
        { label: '戻る', action: goToTown }
    ]);
}

function startTraining(type) {
    state.miniGame.active = true;
    state.miniGame.timer = 0;
    state.miniGame.target = Math.random() * 380;
    state.miniGame.type = type;
    
    // アニメーション用（簡易）
    let dir = 2;
    const gameInt = setInterval(() => {
        state.miniGame.timer += dir;
        if (state.miniGame.timer >= 395 || state.miniGame.timer <= 0) dir *= -1;
        if (!state.miniGame.active) clearInterval(gameInt);
    }, 10);

    setCommands([
        { label: '今だ！！', action: () => finishTraining(type) }
    ]);
}

function finishTraining(type) {
    const diff = Math.abs(state.miniGame.timer - state.miniGame.target);
    state.miniGame.active = false;
    
    if (diff < 20) {
        state.player[type] += 3;
        showMessage("大成功！ 能力が大幅に上がった！");
    } else if (diff < 60) {
        state.player[type] += 1;
        showMessage("成功。 能力が少し上がった。");
    } else {
        showMessage("失敗……。 成果は得られなかった。");
    }
    updateStatusUI();
    setTimeout(goToTown, 1500);
}

// ----------------------------------------------------
// Arena & Battle (Tournament Implementation)
// ----------------------------------------------------

function goToArena() {
    state.location = 'arena';
    if (state.currentDay >= state.tournamentDay && !state.flags.wonTournament) {
        showMessage("いよいよトーナメントの火蓋が切って落とされる！");
        setCommands([
            { label: 'トーナメント出場', action: startTournamentFlow },
            { label: 'まだ準備中', action: goToTown }
        ]);
    } else {
        const diff = state.tournamentDay - state.currentDay;
        showMessage(`大会本番は${state.tournamentDay}日目だ。今は魔物と練習試合ができる。`);
        setCommands([
            { label: '練習試合 (ゴブリン)', action: () => startBattle('monster') },
            { label: '戻る', action: goToTown }
        ]);
    }
}

function startBattle(mode) {
    state.location = 'battle';
    if (mode === 'monster') {
        state.enemy = { name: '野生のゴブリン', hp: 50, maxHp: 50, atk: 9, def: 5, spd: 8 };
    }
    showMessage(`${state.enemy.name}が現れた！`);
    setBattleCommands();
}

function startTournamentFlow() {
    state.location = 'battle';
    // 決勝戦のイメージ（ケンかリナ）
    state.enemy = JSON.parse(JSON.stringify(rivals[1]));
    showMessage("決勝戦！ 相手は強敵、リナだ！");
    showMessage(`${state.enemy.name}：「いくわよ！」`);
    setBattleCommands();
}

function setBattleCommands() {
    setCommands([
        { label: '通常攻撃', action: playerAttack },
        { label: '捨て身(攻倍/防0)', action: recklessAttack },
        { label: '防御', action: playerDefend }
    ]);
}

function playerAttack() {
    const damage = Math.max(1, state.player.atk - state.enemy.def);
    state.enemy.hp -= damage;
    showMessage(`${state.player.name}の攻撃！ ${damage}のダメージ！`);
    
    if (state.enemy.hp <= 0) {
        state.enemy.hp = 0;
        setTimeout(winBattle, 1500);
    } else {
        setTimeout(enemyTurn, 1000);
    }
}

function recklessAttack() {
    const damage = Math.max(1, (state.player.atk * 2) - state.enemy.def);
    state.enemy.hp -= damage;
    state.isReckless = true;
    showMessage(`${state.player.name}の必死の攻撃！ ${damage}のダメージ！`);
    if (state.enemy.hp <= 0) setTimeout(winBattle, 1500);
    else setTimeout(enemyTurn, 1000);
}

function playerDefend() {
    showMessage(`${state.player.name}は防御を固めた。`);
    state.isDefending = true;
    setTimeout(enemyTurn, 1000);
}

function enemyTurn() {
    let pDef = state.player.def;
    if (state.isReckless) { pDef = 0; state.isReckless = false; }
    if (state.isDefending) { pDef *= 2; state.isDefending = false; }

    // 素早さの差による回避判定（相手より素早ければ回避率UP）
    const evadeChance = Math.max(0, (state.player.spd - state.enemy.spd) * 3);
    if (Math.random() * 100 < evadeChance) {
        showMessage(`${state.enemy.name}の攻撃！ しかし素早く身をかわした！`);
        setTimeout(setBattleCommands, 1500);
        return;
    }

    let damage = Math.max(1, state.enemy.atk - pDef);
    state.player.hp -= damage;
    updateStatusUI();
    showMessage(`${state.enemy.name}の猛攻！ ${damage}のダメージを受けた！`);
    
    if (state.player.hp <= 0) {
        state.player.hp = 0;
        updateStatusUI();
        setTimeout(loseBattle, 1500);
    } else {
        setTimeout(setBattleCommands, 1000);
    }
}

function winBattle() {
    if (state.enemy.name === '剣士のリナ') {
        state.flags.wonTournament = true;
        showMessage("おめでとう！ 大会優勝を果たした！");
    } else {
        const gainedExp = 15;
        const gainedGold = 30;
        state.player.exp += gainedExp;
        state.player.gold += gainedGold;
        showMessage(`勝利！ 経験値${gainedExp}と、金貨${gainedGold}Gを手に入れた。`);
    }
    state.enemy = null;
    updateStatusUI();
    setTimeout(checkLevelUp, 2000);
}

function checkLevelUp() {
    if (state.player.exp >= state.player.expToNext) {
        state.player.exp -= state.player.expToNext;
        state.player.lv++;
        
        // ドラゴンクエスト風：レベルが上がるほど上昇幅の「上限（伸び代）」が増加するランダム上昇
        const lv = state.player.lv;
        const hpUp = Math.floor(Math.random() * 4) + 5 + Math.floor(Math.random() * (lv * 0.6)); // ベース5〜8 + Lvボーナス
        const mpUp = Math.floor(Math.random() * 3) + 1 + Math.floor(Math.random() * (lv * 0.4)); // ベース1〜3 + Lvボーナス
        const atkUp = Math.floor(Math.random() * 3) + 1 + Math.floor(Math.random() * (lv * 0.3)); // ベース1〜3 + Lvボーナス
        const defUp = Math.floor(Math.random() * 2) + 1 + Math.floor(Math.random() * (lv * 0.3)); // ベース1〜2 + Lvボーナス
        const spdUp = Math.floor(Math.random() * 2) + 1 + Math.floor(Math.random() * (lv * 0.2)); // ベース1〜2 + Lvボーナス

        state.player.maxHp += hpUp;
        state.player.hp = state.player.maxHp;
        state.player.maxMp += mpUp;
        state.player.mp = state.player.maxMp;
        state.player.atk += atkUp;
        state.player.def += defUp;
        state.player.spd += spdUp;
        
        // 次のレベルアップまでの必要経験値を1.5倍に（緩やかな二次曲線）
        state.player.expToNext = Math.floor(state.player.expToNext * 1.5);
        
        updateStatusUI();
        
        // メッセージを1行ずつ溜めて連続表示させる（RPG風の演出）
        showMessage(`レベルアップ！ ${state.player.name}は LV${state.player.lv} になった！`);
        showMessage(`最大HPが ${hpUp} あがった！`);
        showMessage(`最大MPが ${mpUp} あがった！`);
        showMessage(`攻撃力が ${atkUp} あがった！`);
        showMessage(`防御力が ${defUp} あがった！`);
        showMessage(`素早さが ${spdUp} あがった！ 体力が全回復した！`);
        
        setTimeout(() => checkLevelUp(), 2500); // 連続UPの確認（メッセージが裏で積まれる）
    } else {
        goToTown();
    }
}

function loseBattle() {
    showMessage("無念……。敗北した。");
    setTimeout(() => {
        state.player.hp = 20;
        updateStatusUI();
        goToTown();
    }, 2500);
}

// ----------------------------------------------------
// Inn
// ----------------------------------------------------

function goToInn() {
    state.location = 'inn';
    showMessage("宿屋だ。しっかり休んで英気を養おう。");
    setCommands([
        { label: '宿泊して翌日へ (10G)', action: restUntilNextDay },
        { label: '戻る', action: goToTown }
    ]);
}

function restUntilNextDay() {
    if (state.player.gold < 10) {
        showMessage("お金が足りないよ。");
        return;
    }
    state.player.gold -= 10;
    state.player.hp = state.player.maxHp;
    state.currentDay++;
    updateStatusUI();
    showMessage("次の日になった。コンディションは最高だ。");
    setTimeout(goToTown, 1500);
}

function init() {
    updateStatusUI();
    goToTown();
    function loop() {
        draw();
        requestAnimationFrame(loop);
    }
    loop();
}

window.onload = init;
