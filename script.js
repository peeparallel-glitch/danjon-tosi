
// data.js content
const INITIAL_GENERALS = [
    { id: 1, name: "蠣崎慶広", power: 45, intel: 55, soldiers: 800 },
    { id: 2, name: "津軽為信", power: 72, intel: 75, soldiers: 900 },
    { id: 3, name: "南部晴政", power: 78, intel: 68, soldiers: 1000 },
    { id: 4, name: "葛西晴信", power: 55, intel: 52, soldiers: 700 },
    { id: 5, name: "秋田愛季", power: 65, intel: 74, soldiers: 850 },
    { id: 6, name: "伊達輝宗", power: 76, intel: 82, soldiers: 1100 },
    { id: 7, name: "最上義守", power: 70, intel: 78, soldiers: 1000 },
    { id: 8, name: "結城晴朝", power: 62, intel: 65, soldiers: 800 },
    { id: 9, name: "葦名盛氏", power: 82, intel: 85, soldiers: 1200 },
    { id: 10, name: "上杉謙信", power: 99, intel: 88, soldiers: 1300 },
    { id: 11, name: "佐竹義重", power: 91, intel: 85, soldiers: 1100 },
    { id: 12, name: "宇都宮広綱", power: 58, intel: 60, soldiers: 750 },
    { id: 13, name: "里見義堯", power: 75, intel: 84, soldiers: 900 },
    { id: 14, name: "北条氏政", power: 82, intel: 85, soldiers: 1200 },
    { id: 15, name: "武田信玄", power: 98, intel: 96, soldiers: 1300 },
    { id: 16, name: "畠山義綱", power: 52, intel: 58, soldiers: 800 },
    { id: 17, name: "神保氏張", power: 58, intel: 55, soldiers: 700 },
    { id: 18, name: "姉小路自綱", power: 45, intel: 62, soldiers: 600 },
    { id: 19, name: "木曾義昌", power: 72, intel: 60, soldiers: 850 },
    { id: 20, name: "今川義元", power: 80, intel: 88, soldiers: 1300 },
    { id: 21, name: "本願寺光佐", power: 75, intel: 92, soldiers: 1100 },
    { id: 22, name: "朝倉義景", power: 68, intel: 72, soldiers: 900 },
    { id: 23, name: "斉藤義龍", power: 84, intel: 75, soldiers: 1000 },
    { id: 24, name: "徳川家康", power: 92, intel: 94, soldiers: 1100 },
    { id: 25, name: "織田信長", power: 94, intel: 92, soldiers: 1200 },
    { id: 26, name: "北畠具教", power: 78, intel: 65, soldiers: 900 },
    { id: 27, name: "浅井長政", power: 90, intel: 78, soldiers: 1000 },
    { id: 28, name: "六角義賢", power: 72, intel: 68, soldiers: 900 },
    { id: 29, name: "一色義道", power: 55, intel: 62, soldiers: 800 },
    { id: 30, name: "波多野秀治", power: 62, intel: 58, soldiers: 850 },
    { id: 31, name: "足利義昭", power: 30, intel: 75, soldiers: 500 },
    { id: 32, name: "筒井順慶", power: 65, intel: 88, soldiers: 800 },
    { id: 33, name: "三好長慶", power: 85, intel: 92, soldiers: 1200 },
    { id: 34, name: "堀内氏善", power: 68, intel: 55, soldiers: 700 },
    { id: 35, name: "山名豊国", power: 52, intel: 70, soldiers: 800 },
    { id: 36, name: "別所長治", power: 65, intel: 60, soldiers: 800 },
    { id: 37, name: "尼子晴久", power: 78, intel: 82, soldiers: 1000 },
    { id: 38, name: "宇喜多直家", power: 74, intel: 97, soldiers: 900 },
    { id: 39, name: "毛利元就", power: 85, intel: 99, soldiers: 1200 },
    { id: 40, name: "十河存保", power: 72, intel: 68, soldiers: 850 },
    { id: 41, name: "細川晴元", power: 55, intel: 75, soldiers: 800 },
    { id: 42, name: "河野通宣", power: 48, intel: 65, soldiers: 700 },
    { id: 43, name: "長宗我部元親", power: 92, intel: 88, soldiers: 1100 },
    { id: 44, name: "一条兼定", power: 25, intel: 40, soldiers: 500 },
    { id: 45, name: "城井鎮房", power: 78, intel: 62, soldiers: 850 },
    { id: 46, name: "龍造寺隆信", power: 94, intel: 72, soldiers: 1200 },
    { id: 47, name: "大友宗麟", power: 82, intel: 90, soldiers: 1100 },
    { id: 48, name: "阿蘇惟将", power: 65, intel: 58, soldiers: 800 },
    { id: 49, name: "伊東義祐", power: 68, intel: 75, soldiers: 850 },
    { id: 50, name: "島津貴久", power: 88, intel: 85, soldiers: 1200 }
];

const PROVINCE_NAMES = [
    "蝦夷", "陸奥", "陸中盛", "陸中岩", "羽後", "陸前", "羽前", "磐城", "岩代", "越後上",
    "常陸", "下野", "安房", "武蔵伊", "甲斐信", "能登", "越中", "飛騨", "木曾福", "遠駿",
    "加賀", "越前", "美濃", "三河", "尾張", "伊勢志", "近江", "伊賀", "丹若", "丹波",
    "山城", "大和", "摂和", "紀伊", "因但", "播磨", "出伯", "三備", "安長", "讃岐",
    "阿波", "伊予", "土佐", "土佐中", "豊前", "築肥", "豊後", "肥後", "日向", "薩大"
];

// Rough mapping of Japanese provinces to a grid that looks like Japan
const JAPAN_COORDINATES = [
    // Spread across 4000px x 2000px (4 Screens wide version)
    // Tohoku (East)
    { x: 3660, y: 200 }, { x: 3460, y: 360 }, { x: 3660, y: 530 }, { x: 3800, y: 730 }, { x: 3330, y: 660 },
    { x: 3530, y: 900 }, { x: 3330, y: 1130 }, { x: 3660, y: 1330 }, { x: 3460, y: 1460 }, { x: 3060, y: 560 },
    // Kanto/Central (East-Center)
    { x: 3260, y: 1660 }, { x: 3130, y: 1400 }, { x: 3330, y: 1830 }, { x: 2930, y: 1730 }, { x: 2730, y: 1330 },
    { x: 2530, y: 560 }, { x: 2460, y: 760 }, { x: 2530, y: 960 }, { x: 2730, y: 1130 }, { x: 2600, y: 1560 },
    // Chubu/Tokai (Middle)
    { x: 2330, y: 660 }, { x: 2260, y: 900 }, { x: 2330, y: 1130 }, { x: 2460, y: 1400 }, { x: 2200, y: 1330 },
    { x: 2240, y: 1560 }, { x: 2060, y: 1100 }, { x: 2100, y: 1230 }, { x: 1860, y: 760 }, { x: 1930, y: 900 },
    // Kinki/Chugoku (West-Center)
    { x: 1860, y: 1130 }, { x: 1930, y: 1400 }, { x: 1800, y: 1330 }, { x: 1840, y: 1660 }, { x: 1660, y: 900 },
    { x: 1530, y: 1230 }, { x: 1330, y: 830 }, { x: 1400, y: 1100 }, { x: 1200, y: 1100 }, { x: 1260, y: 1460 },
    // Shikoku/Kyushu (West)
    { x: 1330, y: 1600 }, { x: 1130, y: 1330 }, { x: 1200, y: 1660 }, { x: 1060, y: 1830 }, { x: 860, y: 830 },
    { x: 530, y: 1000 }, { x: 660, y: 1230 }, { x: 400, y: 1400 }, { x: 530, y: 1560 }, { x: 260, y: 1560 }
];

function createTerritories() {
    const territories = [];
    for (let i = 0; i < 50; i++) {
        const coords = JAPAN_COORDINATES[i];
        const ownerId = INITIAL_GENERALS[i].id;
        territories.push({
            id: i,
            name: PROVINCE_NAMES[i],
            ownerId: ownerId,
            soldiers: 500 + Math.floor(Math.random() * 500),
            rice: 1000 + Math.floor(Math.random() * 1000),
            gold: 1000 + Math.floor(Math.random() * 1000),
            gridX: coords.x,
            gridY: coords.y,
            development: 20 + Math.floor(Math.random() * 30), // 開墾
            floodControl: 20 + Math.floor(Math.random() * 30), // 治水
            commerce: 20 + Math.floor(Math.random() * 30),    // 商業
            loyalty: 40 + Math.floor(Math.random() * 40),     // 民心 (忠誠)
            training: 20 + Math.floor(Math.random() * 40),    // 訓練
            armament: 10 + Math.floor(Math.random() * 30)     // 武装
        });
    }
    return territories;
}

// renderer.js content
class AssetManager {
    constructor(ctx) {
        this.ctx = ctx;
    }
    drawTerritory(x, y, width, height, ownerId, isSelected, playerOwnedId) {
        const ctx = this.ctx;
        ctx.fillStyle = "#2d5a27";
        ctx.fillRect(x, y, width, height);
        ctx.strokeStyle = isSelected ? "#fff" : "#444";
        ctx.lineWidth = isSelected ? 3 : 1;
        ctx.strokeRect(x, y, width, height);
        if (ownerId !== null) {
            ctx.fillStyle = "#8b4513";
            ctx.fillRect(x + width/4, y + height/4, width/2, height/2);
            ctx.fillStyle = ownerId === playerOwnedId ? "#3498db" : "#e74c3c";
            ctx.fillRect(x + width/3, y + height/3, width/3, width/3);
        }
    }
    drawBattleUnit(side, x, y, size, hp, maxHp, unitName, isSelected) {
        const ctx = this.ctx;
        // Unit Icon
        ctx.fillStyle = side === 'left' ? "#3498db" : "#e74c3c";
        ctx.fillRect(x, y, size, size);
        ctx.strokeStyle = isSelected ? "#ffd700" : "#fff";
        ctx.lineWidth = isSelected ? 4 : 2;
        ctx.strokeRect(x, y, size, size);
        
        if (isSelected) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#ffd700";
            ctx.strokeRect(x, y, size, size);
            ctx.shadowBlur = 0;
        }
        
        const barWidth = 120;
        const barHeight = 8;
        const offsetX = side === 'left' ? size + 15 : -(barWidth + 15);
        
        // HP Bar Background
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(x + offsetX, y + 8, barWidth, barHeight);
        
        // HP Bar Fill
        const hpRatio = hp / maxHp;
        ctx.fillStyle = hpRatio > 0.5 ? "#2ecc71" : (hpRatio > 0.2 ? "#f1c40f" : "#e74c3c");
        const currentHpWidth = Math.max(0, Math.min(1, hpRatio) * barWidth);
        ctx.fillRect(x + offsetX, y + 8, currentHpWidth, barHeight);
        
        // Bar Border
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 1;
        ctx.strokeRect(x + offsetX, y + 8, barWidth, barHeight);
        
        // Text (Unit Name and HP)
        ctx.fillStyle = "#fff";
        ctx.font = "bold 14px Arial";
        ctx.textAlign = side === 'left' ? "left" : "right";
        const textX = side === 'left' ? x + size + 15 : x - 15;
        ctx.fillText(`${unitName}`, textX, y + size - 15);
        
        ctx.font = "12px Arial";
        ctx.fillStyle = "#ccc";
        ctx.fillText(`兵数: ${hp}`, textX, y + size + 2);
    }

    drawJapanOutline() {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 15;
        ctx.lineJoin = "round";

        // Hokkaido (4000x2000)
        ctx.moveTo(3930, 130);
        ctx.lineTo(3200, 160);
        ctx.lineTo(3060, 660);
        ctx.lineTo(3460, 910);
        ctx.lineTo(3930, 830);
        ctx.closePath();

        // Honshu
        ctx.moveTo(3460, 660); 
        ctx.lineTo(3200, 1000);
        ctx.lineTo(3330, 1580);
        ctx.lineTo(3060, 1910); 
        ctx.lineTo(2000, 1750); 
        ctx.lineTo(1330, 1500); 
        ctx.lineTo(800, 1410); 
        ctx.lineTo(260, 1330);  
        ctx.lineTo(260, 1000);  
        ctx.lineTo(1060, 1000); 
        ctx.lineTo(1860, 830); 
        ctx.lineTo(2660, 660); 
        ctx.closePath();

        // Shikoku
        ctx.moveTo(1860, 1580);
        ctx.lineTo(1060, 1580);
        ctx.lineTo(1000, 1910);
        ctx.lineTo(1800, 1910);
        ctx.closePath();

        // Kyushu
        ctx.moveTo(660, 1250);
        ctx.lineTo(200, 1330);
        ctx.lineTo(200, 1910);
        ctx.lineTo(660, 1910);
        ctx.closePath();

        ctx.stroke();
        
        // Secondary subtle fill
        ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
        ctx.fill();
    }
}

// battle.js content
class Battle {
    constructor(ctx, renderer, player, enemy, onComplete) {
        this.ctx = ctx;
        this.renderer = renderer;
        this.player = player;
        this.enemy = enemy;
        this.onComplete = onComplete;
        
        this.playerMp = Math.floor(player.intel / 2);
        this.playerMaxMp = this.playerMp;
        this.enemyMp = Math.floor(enemy.intel / 2);
        this.enemyMaxMp = this.enemyMp;

        // Split soldiers into 5 units (Ratio: 3:2:2:2:1) - Use actual names for generals
        const playerGenName = player.name.includes("(") ? player.name.match(/\((.*)\)/)[1] : player.name;
        const enemyGenName = enemy.name.includes("(") ? enemy.name.match(/\((.*)\)/)[1] : enemy.name;
        this.playerUnits = this.createUnits(player.soldiers, playerGenName);
        this.enemyUnits = this.createUnits(enemy.soldiers, enemyGenName);
        
        this.turn = 'player';
        this.isAnimating = false;
        this.showingTactics = false;
        this.shake = 0;
        this.battleLog = `${player.name} と ${enemy.name} の戦いが始まった！`;
        this.commands = [
            { id: 'attack', label: '攻撃', x: 80, y: 510, w: 120, h: 50 },
            { id: 'tactic_menu', label: '計略', x: 220, y: 510, w: 120, h: 50 },
            { id: 'retreat', label: '退却', x: 360, y: 510, w: 120, h: 50 }
        ];
        this.tacticOptions = [
            { id: 'fire', label: '火計 (5MP)', cost: 5, x: 80, y: 440, w: 120, h: 50 },
            { id: 'water', label: '水計 (8MP)', cost: 8, x: 220, y: 440, w: 120, h: 50 },
            { id: 'heal', label: '援軍 (10MP)', cost: 10, x: 360, y: 440, w: 120, h: 50 },
            { id: 'back', label: '戻る', cost: 0, x: 500, y: 440, w: 120, h: 50 }
        ];
        this.hoveredCommandId = null;
        
        // Sequential Turn System
        this.battleState = 'input'; // 'input', 'execute', 'end'
        this.currentActorIndex = 0;
        this.unitActions = []; // { actorIndex, type, targetIndex, tacticId }
        this.actionQueue = [];
        this.isExecuting = false;
        this.attackerLunge = 0;
        this.damageText = null; // { value, side, index, timer }
    }

    createUnits(total, generalName) {
        const ratios = [0.3, 0.2, 0.2, 0.2, 0.1];
        const names = [generalName, "足軽", "騎馬隊", "鉄砲隊", "足軽"];
        return names.map((name, i) => {
            const hp = Math.floor(total * ratios[i]);
            return { name, hp, maxHp: hp };
        });
    }

    getTotalHp(units) {
        return units.reduce((sum, u) => sum + Math.max(0, u.hp), 0);
    }

    getTotalMaxHp(units) {
        return units.reduce((sum, u) => sum + u.maxHp, 0);
    }
    handleMouseMove(x, y) {
        if (this.isAnimating || this.turn !== 'player') {
            this.hoveredCommandId = null;
            return;
        }
        const options = this.showingTactics ? this.tacticOptions : this.commands;
        const found = options.find(c => x >= c.x - 5 && x <= c.x + c.w + 5 && y >= c.y - 5 && y <= c.y + c.h + 5);
        this.hoveredCommandId = found ? found.id : null;
    }
    handleClick(x, y) {
        if (this.isAnimating || this.turn !== 'player') return;
        const options = this.showingTactics ? this.tacticOptions : this.commands;
        const button = options.find(c => x >= c.x - 5 && x <= c.x + c.w + 5 && y >= c.y - 5 && y <= c.y + c.h + 5);
        
        if (button) {
            if (this.showingTactics) {
                if (button.id === 'back') this.showingTactics = false;
                else this.handleTactic(button);
            } else {
                this.handleBaseCommand(button.id);
            }
        }
    }
    handleTactic(tactic) {
        if (this.playerMp < tactic.cost) {
            this.battleLog = "MPが足りません！";
            return;
        }
        this.unitActions.push({ 
            type: 'tactic', 
            actorIndex: this.currentActorIndex, 
            tacticId: tactic.id,
            tacticLabel: tactic.label,
            cost: tactic.cost 
        });
        this.nextActor();
    }

    nextActor() {
        this.currentActorIndex++;
        if (this.currentActorIndex >= 5) {
            this.startExecution();
        } else {
            // Find next alive unit
            while (this.currentActorIndex < 5 && this.playerUnits[this.currentActorIndex].hp <= 0) {
                this.currentActorIndex++;
            }
            if (this.currentActorIndex >= 5) this.startExecution();
            else this.battleLog = `${this.playerUnits[this.currentActorIndex].name} の行動を選択してください。`;
        }
    }

    startExecution() {
        this.battleState = 'execute';
        this.battleLog = "全軍進撃！";
        
        // Player actions
        this.actionQueue = this.unitActions.map(a => ({ ...a, side: 'player' }));
        
        // Enemy actions (Randomly decide for each alive unit)
        this.enemyUnits.forEach((u, i) => {
            if (u.hp <= 0) return;
            const rand = Math.random();
            if (rand < 0.2 && this.enemyMp >= 5) {
                this.actionQueue.push({ side: 'enemy', type: 'tactic', actorIndex: i, tacticId: 'fire', cost: 5, tacticLabel: '火計' });
                this.enemyMp -= 5;
            } else {
                this.actionQueue.push({ side: 'enemy', type: 'attack', actorIndex: i });
            }
        });

        // Shuffle queue slightly or just run in order (Player then Enemy for now for clarity)
        this.executeNextAction();
    }

    async executeNextAction() {
        if (this.actionQueue.length === 0) {
            this.finishTurn();
            return;
        }

        const action = this.actionQueue.shift();
        const attackerUnits = action.side === 'player' ? this.playerUnits : this.enemyUnits;
        const targetUnits = action.side === 'player' ? this.enemyUnits : this.playerUnits;
        const attackerObj = action.side === 'player' ? this.player : this.enemy;
        const targetObj = action.side === 'player' ? this.enemy : this.player;

        // Skip if actor died in the meantime
        if (attackerUnits[action.actorIndex].hp <= 0) {
            this.executeNextAction();
            return;
        }

        this.isAnimating = true;
        this.currentActorSide = action.side;
        this.currentActorIdx = action.actorIndex;
        this.attackerLunge = action.side === 'player' ? 60 : -60; // 相手の方へ踏み込む
        this.damageText = null;

        if (action.type === 'attack') {
            const aliveTargets = targetUnits.map((u, i) => ({...u, i})).filter(u => u.hp > 0);
            if (aliveTargets.length === 0) {
                this.executeNextAction();
                return;
            }
            const target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)];
            
            // Famicom-style damage: HP * Power * (Training + Armament) factor
            const trainingFactor = (attackerUnits[action.actorIndex].training || 50) / 100;
            const armamentFactor = 1 + (attackerUnits[action.actorIndex].armament || 20) / 100;
            
            let damage = Math.floor((attackerUnits[action.actorIndex].hp * (attackerObj.power / 100) * trainingFactor * armamentFactor * (0.8 + Math.random() * 0.4)) / 4.5);
            damage = Math.max(5, damage);
            
            const targetSide = action.side === 'player' ? 'right' : 'left';
            this.battleLog = `${attackerUnits[action.actorIndex].name} の攻撃！ ${targetUnits[target.i].name} に ${damage} のダメージ！`;
            this.shake = 15;
            
            setTimeout(() => {
                targetUnits[target.i].hp = Math.max(0, targetUnits[target.i].hp - damage);
                this.shake = 15;
                this.attackerLunge = 0; // 戻る
                this.damageText = { value: damage, side: targetSide, index: target.i, timer: 60 };
                
                if (this.checkBattleEndInstant()) {
                    this.actionQueue = []; // Clear queue on end
                    return;
                }
                setTimeout(() => this.executeNextAction(), 400);
            }, 500);

        } else if (action.type === 'tactic') {
            if (action.side === 'player') this.playerMp -= (action.cost || 0);
            
            if (action.tacticId === 'heal') {
                const heal = Math.floor(attackerObj.intel * 5);
                this.battleLog = `${attackerUnits[action.actorIndex].name} の援軍！全隊が回復！`;
                attackerUnits.forEach(u => { if (u.hp > 0) u.hp = Math.min(u.maxHp, u.hp + heal); });
            } else {
                const multiplier = action.tacticId === 'fire' ? 1.0 : 1.5;
                const damage = Math.floor(attackerObj.intel * 2.5 * multiplier + Math.random() * 10);
                const aliveTargets = targetUnits.map((u, i) => ({...u, i})).filter(u => u.hp > 0);
                if (aliveTargets.length > 0) {
                    const target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)];
                    this.battleLog = `${attackerUnits[action.actorIndex].name} の ${action.tacticLabel}！ ${targetUnits[target.i].name} に ${damage} のダメージ！`;
                    targetUnits[target.i].hp = Math.max(0, targetUnits[target.i].hp - damage);
                    this.shake = 20;

                    const targetSide = action.side === 'player' ? 'right' : 'left';
                    this.damageText = { value: damage, side: targetSide, index: target.i, timer: 60 };
                }
            }
            
            setTimeout(() => {
                this.shake = 0;
                this.attackerLunge = 0; // 戻る
                if (this.checkBattleEndInstant()) {
                    this.actionQueue = [];
                    return;
                }
                setTimeout(() => this.executeNextAction(), 600);
            }, 500);
        }
    }

    checkBattleEndInstant() {
        const playerHp = this.getTotalHp(this.playerUnits);
        const enemyHp = this.getTotalHp(this.enemyUnits);

        if (playerHp <= 0) {
            this.battleLog = "全軍壊滅... 敗北です。";
            this.isAnimating = false;
            setTimeout(() => this.onComplete('lose'), 1000);
            return true;
        }
        if (enemyHp <= 0) {
            this.battleLog = "敵を全滅させた！ 勝利です！";
            this.isAnimating = false;
            setTimeout(() => this.onComplete('win'), 1000);
            return true;
        }
        return false;
    }

    finishTurn() {
        if (this.checkBattleEndInstant()) return;

        this.battleState = 'input';
        this.currentActorIndex = 0;
        this.unitActions = [];
        this.isAnimating = false;
        // Skip dead units for input
        while (this.currentActorIndex < 5 && this.playerUnits[this.currentActorIndex].hp <= 0) {
            this.currentActorIndex++;
        }
        if (this.currentActorIndex >= 5) this.startExecution();
        else this.battleLog = `${this.playerUnits[this.currentActorIndex].name} の行動を選択してください。`;
    }

    handleBaseCommand(id) {
        if (id === 'attack') {
            this.unitActions.push({ type: 'attack', actorIndex: this.currentActorIndex });
            this.nextActor();
        } else if (id === 'tactic_menu') {
            this.showingTactics = true;
        } else if (id === 'retreat') {
            this.onComplete('lose');
        }
    }
    update() {
        const ctx = this.ctx;
        ctx.fillStyle = "#1e1e1e";
        ctx.fillRect(0, 0, 1000, 600);
        
        const shakeX = this.shake > 0 ? (Math.random()-0.5)*this.shake : 0;
        if (this.shake > 0) this.shake *= 0.8;
        if (this.shake < 0.1) this.shake = 0;
        
        // Draw 5 units for each side
        this.playerUnits.forEach((u, i) => {
            const isActing = (this.isAnimating && this.currentActorSide === 'player' && this.currentActorIdx === i);
            const isSelecting = (this.battleState === 'input' && this.currentActorIndex === i);
            
            const x = 150 + (this.turn === 'enemy' ? shakeX : 0) + (isActing ? this.attackerLunge : (isSelecting ? 10 : 0));
            const y = 140 + i * 75;
            this.renderer.drawBattleUnit('left', x, y, 50, u.hp, u.maxHp, u.name, isSelecting || isActing);
        });

        this.enemyUnits.forEach((u, i) => {
            const isActing = (this.isAnimating && this.currentActorSide === 'enemy' && this.currentActorIdx === i);
            const x = 800 + (this.turn === 'player' ? shakeX : 0) + (isActing ? this.attackerLunge : 0);
            const y = 140 + i * 75;
            this.renderer.drawBattleUnit('right', x, y, 50, u.hp, u.maxHp, u.name, isActing);
        });

        // Draw Floating Damage Numbers
        if (this.damageText && this.damageText.timer > 0) {
            const dt = this.damageText;
            const baseX = (dt.side === 'left' ? 150 : 800) + 25; // Center of unit box
            const baseY = (140 + dt.index * 75) + 30; // Start inside unit box
            
            // Pop up and fade out animation
            const offset = (60 - dt.timer) * 0.8;
            const alpha = Math.min(1, dt.timer / 30);
            
            this.ctx.save();
            this.ctx.font = "bold 34px 'Outfit'";
            this.ctx.fillStyle = `rgba(255, 50, 50, ${alpha})`;
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            this.ctx.lineWidth = 4;
            this.ctx.textAlign = "center";
            this.ctx.strokeText(`-${dt.value}`, baseX, baseY - offset);
            this.ctx.fillText(`-${dt.value}`, baseX, baseY - offset);
            this.ctx.restore();
            
            dt.timer--;
        }

        // MP Bar and Labels (Moved to above the generals)
        const barY = 110;
        const barH = 6;
        const barW = 120;
        
        // Player MP Above General
        ctx.fillStyle = "#444";
        ctx.fillRect(150, barY, barW, barH);
        ctx.fillStyle = "#3498db";
        ctx.fillRect(150, barY, (this.playerMp / (this.playerMaxMp || 1)) * barW, barH);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.strokeRect(150, barY, barW, barH);
        
        ctx.fillStyle = "#fff";
        ctx.font = "bold 13px Arial";
        ctx.textAlign = "left";
        ctx.fillText(`MP: ${this.playerMp}`, 150, barY - 5);

        // Enemy MP Above General
        const enemyBarX = 800 - barW + 50; 
        ctx.fillStyle = "#444";
        ctx.fillRect(enemyBarX, barY, barW, barH);
        ctx.fillStyle = "#e74c3c";
        ctx.fillRect(enemyBarX, barY, (this.enemyMp / (this.enemyMaxMp || 1)) * barW, barH);
        ctx.strokeStyle = "#fff";
        ctx.strokeRect(enemyBarX, barY, barW, barH);

        ctx.textAlign = "right";
        ctx.fillText(`敵軍 MP: ${this.enemyMp}`, enemyBarX + barW, barY - 5);
        ctx.fillText(`${this.enemy.name}`, 950, 25);

        // Message Box (Moved slightly up)
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(50, 45, 900, 50);
        ctx.fillStyle = "#fff";
        ctx.font = "18px Arial";
        ctx.textAlign = "left";
        ctx.fillText(this.battleLog, 80, 78);
        if (this.turn === 'player' && !this.isAnimating) {
            const options = this.showingTactics ? this.tacticOptions : this.commands;
            options.forEach(c => {
                const isHovered = this.hoveredCommandId === c.id;
                
                // Shadow
                ctx.fillStyle = "rgba(0,0,0,0.5)";
                ctx.fillRect(c.x + 4, c.y + 4, c.w, c.h);

                // Button Body
                ctx.fillStyle = isHovered ? "#555" : "#333";
                ctx.fillRect(c.x, c.y, c.w, c.h);
                
                // Border
                ctx.strokeStyle = isHovered ? "#ffd700" : "#d4af37";
                ctx.lineWidth = isHovered ? 3 : 1;
                ctx.strokeRect(c.x, c.y, c.w, c.h);
                
                // Text
                ctx.fillStyle = isHovered ? "#ffd700" : "#fff";
                ctx.font = isHovered ? "bold 16px Arial" : "16px Arial";
                ctx.textAlign = "center";
                ctx.fillText(c.label, c.x + c.w/2, c.y + c.h/2 + 6);
                
                // Highlight corner
                if (isHovered) {
                    ctx.fillStyle = "#ffd700";
                    ctx.fillRect(c.x, c.y, 10, 2);
                    ctx.fillRect(c.x, c.y, 2, 10);
                }
            });
        }
    }
}

// game.js content
class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error("Canvas not found!");
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.renderer = new AssetManager(this.ctx);
        
        this.battleCanvas = document.getElementById('battle-canvas');
        this.battleCtx = this.battleCanvas ? this.battleCanvas.getContext('2d') : null;
        
        this.minimapCanvas = document.getElementById('minimap-canvas');
        this.minimapCtx = this.minimapCanvas ? this.minimapCanvas.getContext('2d') : null;
        
        // Ensure data is available
        this.allGenerals = INITIAL_GENERALS;
        
        // State variables
        this.selectedGeneral = null;
        this.playerOwnedId = null; 
        
        this.setupTitleScreen();
        this.zoom = 1.0;
        
        // Adjust zoom based on OS / screen size after layout
        setTimeout(() => this.autoAdjustScreen(), 100);
        window.addEventListener('resize', () => this.autoAdjustScreen());
    }

    autoAdjustScreen() {
        const isMobile = window.innerWidth <= 896 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const app = document.getElementById('app');
        
        if (app) {
            const w = window.innerWidth;
            const h = window.innerHeight;
            
            app.style.position = 'fixed';
            app.style.top = '50%';
            app.style.left = '50%';
            app.style.margin = '-384px 0 0 -512px'; // Center unscaled (half of 768 / 1024)
            app.style.transformOrigin = 'center center';
            
            if (isMobile && w < h) {
                // Portrait mode: Scale down to fit the tightest bounds when rotated
                const scale = Math.min(w / 768, h / 1024);
                app.style.transform = `scale(${scale}) rotate(90deg)`;
            } else {
                // Landscape or Desktop: standard scale down if too small
                const scale = Math.min(1.0, w / 1024, h / 768);
                app.style.transform = `scale(${scale})`;
            }
        }

        const container = document.getElementById('map-world-container');
        if (!container) return;
        const rect = container.getBoundingClientRect();
        
        if (isMobile) {
            this.setZoom(0.4, 2000, 1000); // Zoom out to safe default 
        } else {
            this.setZoom(0.8, 2000, 1000); // Centered default
        }
    }

    setZoom(newZoom, centerX, centerY) {
        const container = document.getElementById('map-world-container');
        const viewport = document.getElementById('map-scroll-viewport');
        if (!container || !viewport) return;
        
        const oldZoom = this.zoom;
        this.zoom = Math.max(0.2, Math.min(3.0, newZoom));
        
        // Adjust scroll to keep the point under the cursor stable
        const rect = container.getBoundingClientRect();
        const relX = (centerX || (rect.width / 2)) + container.scrollLeft;
        const relY = (centerY || (rect.height / 2)) + container.scrollTop;
        
        const ratio = this.zoom / oldZoom;
        
        this.canvas.style.width = (4000 * this.zoom) + "px";
        this.canvas.style.height = (2000 * this.zoom) + "px";
        viewport.style.width = (4000 * this.zoom) + "px";
        viewport.style.height = (2000 * this.zoom) + "px";
        
        container.scrollLeft = relX * ratio - (centerX || (rect.width / 2));
        container.scrollTop = relY * ratio - (centerY || (rect.height / 2));
    }

    setupTitleScreen() {
        document.getElementById('btn-start').onclick = async () => {
            // Try to force fullscreen and landscape if on mobile
            try {
                if (document.documentElement.requestFullscreen) {
                    await document.documentElement.requestFullscreen();
                }
                if (screen.orientation && screen.orientation.lock) {
                    await screen.orientation.lock('landscape');
                }
            } catch (e) {
                console.log("Fullscreen or orientation lock failed/unsupported.", e);
            }
            
            document.getElementById('title-screen').classList.add('hidden');
            this.showSelectScreen();
        };
    }

    showSelectScreen() {
        const selectScreen = document.getElementById('select-screen');
        selectScreen.classList.remove('hidden');
        
        const list = document.getElementById('general-list');
        list.innerHTML = '';
        
        // Show top 9 famous generals for selection
        this.allGenerals.slice(0, 9).forEach(g => {
            const card = document.createElement('div');
            card.className = 'general-card';
            card.style.pointerEvents = 'auto'; // Ensure it's clickable
            card.innerHTML = `
                <h3 style="pointer-events:none;">${g.name}</h3>
                <p style="pointer-events:none;">武力: ${g.power} | 知力: ${g.intel}</p>
                <p style="pointer-events:none;">初期兵士: ${g.soldiers}</p>
            `;
            card.onclick = (e) => {
                e.stopPropagation();
                console.log("Selected general:", g.name);
                document.querySelectorAll('.general-card').forEach(c => c.classList.remove('selected', 'active'));
                card.classList.add('selected', 'active');
                card.style.borderColor = "#d4af37";
                card.style.background = "rgba(212, 175, 55, 0.2)";
                this.selectedGeneral = g;
            };
            list.appendChild(card);
        });

        document.getElementById('btn-confirm-select').onclick = () => {
            if (!this.selectedGeneral) {
                alert("武将を選択してください");
                return;
            }
            this.startGame();
        };
    }

    startGame() {
        document.getElementById('select-screen').classList.add('hidden');
        document.getElementById('map-world-container').classList.remove('hidden');
        document.getElementById('game-status').classList.remove('hidden');
        
        // Setup player ID
        this.playerOwnedId = this.selectedGeneral.id;
        
        // Setup game data
        this.territories = createTerritories();
        this.generals = [...INITIAL_GENERALS];

        this.selectedTerritory = null;
        this.attackingTerritory = null;
        this.targetTerritory = null;
        this.state = 'MAP';
        this.battle = null;
        this.year = 1560;
        this.month = 0; 

        this.turnQueue = [];
        this.currentTurnIdx = -1;
        this.actingTerritory = null;

        this.setupCanvas();
        this.bindEvents();
        
        // Initial scroll centering
        const playerTerritory = this.territories.find(t => t.ownerId === this.playerOwnedId);
        if (playerTerritory) {
            const container = document.getElementById('map-world-container');
            container.scrollLeft = playerTerritory.gridX - container.clientWidth / 2 + 80;
            container.scrollTop = playerTerritory.gridY - container.clientHeight / 2 + 80;
        }

        console.log("Game started with:", this.selectedGeneral.name);
        this.startNextMonth();
        this.update();
    }

    setupCanvas() {
        this.canvas.width = 4000;
        this.canvas.height = 2000;
        this.canvas.style.backgroundColor = '#111';
    }

    bindEvents() {
        const container = document.getElementById('map-world-container');
        let isDragging = false;
        let startX, startY, scrollL, scrollT;
        let hasMoved = false;

        const onDown = (px, py) => {
            isDragging = true;
            hasMoved = false;
            startX = px;
            startY = py;
            scrollL = container.scrollLeft;
            scrollT = container.scrollTop;
        };

        const onMove = (px, py) => {
            if (!isDragging) return;
            const dx = px - startX;
            const dy = py - startY;
            if (Math.abs(dx) > 10 || Math.abs(dy) > 10) hasMoved = true;
            container.scrollLeft = scrollL - dx;
            container.scrollTop = scrollT - dy;
        };

        const onUp = () => {
            isDragging = false;
        };

        // Map Scroll Handle
        container.onmousedown = (e) => onDown(e.pageX, e.pageY);
        window.addEventListener('mousemove', (e) => {
            if (this.state === 'MAP') onMove(e.pageX, e.pageY);
        });
        window.addEventListener('mouseup', onUp);

        // Map Click Handle
        this.canvas.onclick = (e) => {
            if (hasMoved || this.state !== 'MAP') return;
            const rect = this.canvas.getBoundingClientRect();
            const scaleX = this.canvas.width / rect.width;
            const scaleY = this.canvas.height / rect.height;
            const mouseX = (e.clientX - rect.left) * scaleX;
            const mouseY = (e.clientY - rect.top) * scaleY;
            this.handleMapClick(mouseX, mouseY);
        };

        // Battle Input Handle
        this.battleCanvas.onmousedown = (e) => {
            if (this.state !== 'BATTLE' || !this.battle) return;
            const rect = this.battleCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.battle.handleClick(x, y);
        };
        this.battleCanvas.onmousemove = (e) => {
            if (this.state !== 'BATTLE' || !this.battle) return;
            const rect = this.battleCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.battle.handleMouseMove(x, y);
        };

        // Touch support
        container.ontouchstart = (e) => onDown(e.touches[0].pageX, e.touches[0].pageY);
        container.ontouchmove = (e) => {
            if (isDragging) e.preventDefault();
            onMove(e.touches[0].pageX, e.touches[0].pageY);
        };
        container.ontouchend = onUp;
        
        document.getElementById('btn-開墾').onclick = () => { if (this.isPlayerTurn()) this.develop(); };
        document.getElementById('btn-治水').onclick = () => { if (this.isPlayerTurn()) this.floodControl(); };
        document.getElementById('btn-商売').onclick = () => { if (this.isPlayerTurn()) this.commerce(); };
        document.getElementById('btn-施し').onclick = () => { if (this.isPlayerTurn()) this.give(); };
        document.getElementById('btn-徴兵').onclick = () => { if (this.isPlayerTurn()) this.conscript(); };
        document.getElementById('btn-訓練').onclick = () => { if (this.isPlayerTurn()) this.trainTerritory(); };
        document.getElementById('btn-武装').onclick = () => { if (this.isPlayerTurn()) this.armTerritory(); };
        document.getElementById('btn-出陣').onclick = () => { if (this.isPlayerTurn()) this.startBattle(); };

        // Merchant buttons
        document.getElementById('btn-商人').onclick = () => this.toggleMerchantMenu(true);
        document.getElementById('btn-cancel-merchant').onclick = () => this.toggleMerchantMenu(false);
        document.getElementById('btn-buy-rice').onclick = () => this.merchantTrade('buy-rice');
        document.getElementById('btn-sell-rice').onclick = () => this.merchantTrade('sell-rice');
        document.getElementById('btn-buy-arms').onclick = () => this.merchantTrade('buy-arms');

        // Minimap buttons
        const btnToggle = document.getElementById('btn-toggle-minimap');
        if (btnToggle) btnToggle.onclick = () => this.toggleMinimap(true);
        const btnClose = document.getElementById('btn-close-minimap');
        if (btnClose) btnClose.onclick = () => this.toggleMinimap(false);

        // Minimap Click-to-Scroll
        if (this.minimapCanvas) {
            this.minimapCanvas.onclick = (e) => {
                const rect = this.minimapCanvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Map 1000x500 to 4000x2000
                const scaleX = 4000 / 1000;
                const scaleY = 2000 / 500;
                
                const targetX = x * scaleX;
                const targetY = y * scaleY;
                
                container.scrollLeft = (targetX * this.zoom) - container.clientWidth / 2;
                container.scrollTop = (targetY * this.zoom) - container.clientHeight / 2;
            };
        }

        // --- Zoom Implementation is now in this.setZoom ---

        // Mouse Wheel Zoom
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = -e.deltaY;
            const factor = delta > 0 ? 1.1 : 0.9;
            const rect = container.getBoundingClientRect();
            this.setZoom(this.zoom * factor, e.clientX - rect.left, e.clientY - rect.top);
        }, { passive: false });

        // Pinch Zoom
        let initialPinchDist = null;
        container.addEventListener('touchmove', (e) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const dist = Math.hypot(
                    e.touches[0].pageX - e.touches[1].pageX,
                    e.touches[0].pageY - e.touches[1].pageY
                );
                if (initialPinchDist === null) {
                    initialPinchDist = dist;
                } else {
                    const factor = dist / initialPinchDist;
                    const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                    const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                    const rect = container.getBoundingClientRect();
                    this.setZoom(this.zoom * factor, centerX - rect.left, centerY - rect.top);
                    initialPinchDist = dist;
                }
            }
        }, { passive: false });

        container.addEventListener('touchend', (e) => {
            if (e.touches.length < 2) initialPinchDist = null;
        });
    }

    isPlayerTurn() {
        return this.state === 'MAP' && this.actingTerritory && this.actingTerritory.ownerId === this.playerOwnedId;
    }

    handleMapClick(x, y) {
        // Find territory by checking if x,y is inside its block
        const blockSize = 160; 
        const territory = this.territories.find(t => 
            x >= t.gridX && x <= t.gridX + blockSize && 
            y >= t.gridY && y <= t.gridY + blockSize
        );
        
        if (territory) {
            if (territory.ownerId === this.playerOwnedId) {
                // 自領地をクリックした場合、出陣元として記憶
                this.attackingTerritory = territory;
            }
            this.selectedTerritory = territory;
            this.showTerritoryInfo(territory);
        } else {
            this.selectedTerritory = null;
            this.attackingTerritory = null;
            document.getElementById('info-panel').classList.add('hidden');
        }
    }

    showTerritoryInfo(t) {
        document.getElementById('info-panel').classList.remove('hidden');
        document.getElementById('territory-name').innerText = t.name;
        const owner = this.generals.find(g => g.id === t.ownerId);
        document.getElementById('territory-owner').innerText = `領主: ${owner ? owner.name : 'なし'}`;
        
        // Resources display
        document.getElementById('territory-resources').innerText = `兵士: ${t.soldiers} | 金: ${t.gold} | 米: ${t.rice}`;
        
        // Stats display
        const statsEl = document.getElementById('territory-stats');
        statsEl.innerHTML = `
            <span>開: ${t.development}</span> | 
            <span>治: ${t.floodControl}</span> | 
            <span>商: ${t.commerce}</span> | 
            <span>民: ${t.loyalty}</span> |
            <span>訓: ${t.training}</span> |
            <span>武: ${t.armament}</span>
        `;
        
        const actionPanel = document.querySelector('.actions');
        
        if (t.ownerId === this.playerOwnedId) {
            actionPanel.classList.remove('hidden');
            document.getElementById('btn-出陣').innerText = '出陣先を選択';
            
            // Show all buttons for player's territory
            const buttons = actionPanel.querySelectorAll('.action-group:not(#merchant-menu) button');
            buttons.forEach(btn => btn.classList.remove('hidden'));

            // Show merchant if exists
            document.getElementById('merchant-actions').classList.toggle('hidden', !t.hasMerchant);
            this.toggleMerchantMenu(false);
        } else {
            // 他領地を選択した場合
            const isAdjacentToAttacker = this.attackingTerritory && this.isAdjacent(this.attackingTerritory, t);
            if (isAdjacentToAttacker) {
                actionPanel.classList.remove('hidden');
                document.getElementById('btn-出陣').innerText = 'ここに出陣！';
                
                // Hide internal affairs buttons when looking at enemy lands
                const internalBtns = ['btn-開墾', 'btn-治水', 'btn-商売', 'btn-施し', 'btn-徴兵', 'btn-訓練', 'btn-武装', 'btn-商人'];
                internalBtns.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.classList.add('hidden');
                });
                document.getElementById('btn-出陣').classList.remove('hidden');
                document.getElementById('merchant-menu').classList.add('hidden');
            } else {
                actionPanel.classList.add('hidden');
            }
        }
    }

    toggleMerchantMenu(show) {
        document.getElementById('merchant-menu').classList.toggle('hidden', !show);
        document.querySelectorAll('.action-group:not(#merchant-menu)').forEach(el => {
            el.classList.toggle('hidden', show);
        });
        if (show) this.log(`商人:「米の相場は ${this.ricePrice} ほどで。武器もございますぜ」`);
    }

    merchantTrade(type) {
        const t = this.actingTerritory;
        if (!t) return;

        switch (type) {
            case 'buy-rice':
                if (t.gold < 100) { this.log("商:「金100は持ってきてくだせえ」"); return; }
                t.gold -= 100;
                const riceGain = 100 * this.ricePrice;
                t.rice += riceGain;
                this.log(`商人から米を${riceGain}買い入れました。`);
                break;
            case 'sell-rice':
                const riceSell = 500;
                if (t.rice < riceSell) { this.log("商:「売る米が足りねえようですな」"); return; }
                t.rice -= riceSell;
                const goldGain = Math.floor(riceSell / (this.ricePrice + 1));
                t.gold += goldGain;
                this.log(`米を売却し、金${goldGain}を得ました。`);
                break;
            case 'buy-arms':
                if (t.gold < 200) { this.log("商:「武器は高いですよ。金200くだせえ」"); return; }
                t.gold -= 200;
                const armUp = 15 + Math.floor(Math.random() * 10);
                t.armament = Math.min(100, t.armament + armUp);
                this.log(`最新の武器を購入。武装度+${armUp}`);
                break;
        }
        this.nextAction();
    }

    isAdjacent(t1, t2) {
        // Distance-based adjacency for the 4000x2000px map
        const dx = t1.gridX - t2.gridX;
        const dy = t1.gridY - t2.gridY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        return dist < 1000; // Adjusted for 4000x2000px map
    }

    develop() {
        const t = this.actingTerritory;
        if (t.gold < 50) { this.log("金が足りません（必要: 50）"); return; }
        t.gold -= 50;
        const up = 5 + Math.floor(Math.random() * 10);
        t.development = Math.min(100, t.development + up);
        this.log(`${t.name}を開墾しました。開発度+${up}`);
        this.nextAction();
    }

    floodControl() {
        const t = this.actingTerritory;
        if (t.gold < 40) { this.log("金が足りません（必要: 40）"); return; }
        t.gold -= 40;
        const up = 8 + Math.floor(Math.random() * 12);
        t.floodControl = Math.min(100, t.floodControl + up);
        this.log(`${t.name}の治水工事を行いました。治水+${up}`);
        this.nextAction();
    }

    commerce() {
        const t = this.actingTerritory;
        if (t.gold < 60) { this.log("金が足りません（必要: 60）"); return; }
        t.gold -= 60;
        const up = 4 + Math.floor(Math.random() * 8);
        t.commerce = Math.min(100, t.commerce + up);
        this.log(`${t.name}の商業を奨励しました。商業+${up}`);
        this.nextAction();
    }

    give() {
        const t = this.actingTerritory;
        if (t.rice < 100) { this.log("米が足りません（必要: 100）"); return; }
        t.rice -= 100;
        const up = 10 + Math.floor(Math.random() * 15);
        t.loyalty = Math.min(100, t.loyalty + up);
        this.log(`${t.name}の民に施しをしました。民心+${up}`);
        this.nextAction();
    }

    conscript() {
        const t = this.actingTerritory;
        if (t.gold < 150) { this.log("金が足りません（必要: 150）"); return; }
        t.gold -= 150;
        t.soldiers += 500;
        t.loyalty = Math.max(0, t.loyalty - 15);
        t.training = Math.max(0, t.training - 20); // 新兵が入ると訓練度が下がる
        this.log(`${t.name}で500人を徴兵。民心と訓練度が低下しました。`);
        this.nextAction();
    }

    trainTerritory() {
        const t = this.actingTerritory;
        if (t.gold < 30) { this.log("金が足りません（必要: 30）"); return; }
        t.gold -= 30;
        const up = 10 + Math.floor(Math.random() * 15);
        t.training = Math.min(100, t.training + up);
        this.log(`${t.name}にて軍事訓練。訓練度+${up}`);
        this.nextAction();
    }

    armTerritory() {
        const t = this.actingTerritory;
        if (t.gold < 80) { this.log("金が足りません（必要: 80）"); return; }
        t.gold -= 80;
        const up = 5 + Math.floor(Math.random() * 10);
        t.armament = Math.min(100, t.armament + up);
        this.log(`${t.name}の装備を強化。武装度+${up}`);
        this.nextAction();
    }

    startBattle() {
        if (!this.attackingTerritory || !this.selectedTerritory) return;
        
        let enemyTerritory = null;
        if (this.selectedTerritory.ownerId !== this.playerOwnedId) {
            enemyTerritory = this.selectedTerritory;
        } else {
            enemyTerritory = this.territories.find(t => t.ownerId !== this.playerOwnedId && this.isAdjacent(this.attackingTerritory, t));
        }
            
        if (!enemyTerritory) {
            this.log("隣接する攻撃可能な領地がありません。");
            return;
        }
        
        const playerGeneral = this.generals.find(g => g.id === this.playerOwnedId);
        const enemyGeneral = this.generals.find(g => g.id === enemyTerritory.ownerId);
        
        this.log(`${enemyTerritory.name}へ出陣！`);
        this.state = 'BATTLE';
        this.targetTerritory = enemyTerritory;
        
        // UI Switch
        document.getElementById('map-world-container').classList.add('hidden');
        document.getElementById('info-panel').classList.add('hidden');
        this.battleCanvas.classList.remove('hidden');
        
        // Swap renderer context to battle canvas
        this.renderer.ctx = this.battleCtx;
        
        this.battle = new Battle(
            this.battleCtx, 
            this.renderer, 
            { ...playerGeneral, name: "自軍(" + playerGeneral.name + ")", soldiers: this.attackingTerritory.soldiers, training: this.attackingTerritory.training, armament: this.attackingTerritory.armament }, 
            { ...enemyGeneral, name: "敵軍(" + enemyGeneral.name + ")", soldiers: enemyTerritory.soldiers, training: enemyTerritory.training, armament: enemyTerritory.armament }, 
            (result) => this.endBattle(result)
        );
    }

    endBattle(result) {
        this.state = 'MAP';
        this.battleCanvas.classList.add('hidden');
        document.getElementById('map-world-container').classList.remove('hidden');
        
        // Restore renderer context to map canvas
        this.renderer.ctx = this.ctx;

        if (result === 'win') {
            this.log(`勝利！${this.targetTerritory.name}を制圧しました。`);
            this.targetTerritory.ownerId = this.playerOwnedId;
            this.targetTerritory.soldiers = Math.floor(this.battle.getTotalHp(this.battle.playerUnits) / 2);
        } else this.log("敗退...");
        
        this.battle = null;
        this.nextAction();
    }

    startNextMonth() {
        this.month++;
        if (this.month > 12) {
            this.month = 1;
            this.year++;
        }
        
        const turnString = `${this.year}年 ${this.month}月`;
        document.getElementById('current-year').innerText = turnString;
        
        // Shuffle turn order
        this.turnQueue = [...this.territories].sort(() => Math.random() - 0.5);
        this.currentTurnIdx = 0;
        
        // Randomize rice price (fluctuation)
        this.ricePrice = 3 + Math.floor(Math.random() * 5); 

        // Merchant arrival: 30% chance per territory, higher if high commerce
        this.territories.forEach(t => {
            const chance = 0.2 + (t.commerce / 200);
            t.hasMerchant = Math.random() < chance;
        });

        this.updateResources();

        this.showMonthOverlay(turnString, () => this.processTurn());
    }

    showMonthOverlay(text, callback) {
        const overlay = document.getElementById('turn-overlay');
        const textElement = document.getElementById('turn-text');
        if (overlay && textElement) {
            textElement.innerText = text;
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.classList.add('hidden');
                if (callback) callback();
            }, 1000);
        } else if (callback) callback();
    }

    processTurn() {
        if (this.currentTurnIdx >= this.turnQueue.length) {
            this.startNextMonth();
            return;
        }

        const territory = this.turnQueue[this.currentTurnIdx];
        this.actingTerritory = territory;
        
        if (territory.ownerId === this.playerOwnedId) {
            // Player's turn to act for this specific territory
            this.log(`${territory.name}: 行動を選択してください。`);
            this.selectedTerritory = territory;
            this.showTerritoryInfo(territory);
            // Highlight acting territory on map happens in update()
        } else {
            // CPU acting for this specific territory
            this.cpuTerritoryTurn(territory);
        }
    }

    nextAction() {
        this.currentTurnIdx++;
        // Small delay for non-player actions to be visible
        const delay = this.actingTerritory && this.actingTerritory.ownerId !== this.playerOwnedId ? 300 : 0;
        setTimeout(() => this.processTurn(), delay);
    }

    cpuTerritoryTurn(t) {
        const gen = this.generals.find(g => g.id === t.ownerId);
        if (!gen) { this.nextAction(); return; }

        const rand = Math.random();
        if (rand < 0.2) {
            // Attack attempt
            const targets = this.territories.filter(target => target.ownerId !== gen.id && this.isAdjacent(t, target));
            if (targets.length > 0) {
                const target = targets[Math.floor(Math.random() * targets.length)];
                if (target.ownerId === this.playerOwnedId) {
                    this.log(`${gen.name}軍が ${t.name} より我が ${target.name} へ侵攻！`);
                    target.soldiers = Math.max(0, target.soldiers - (50 + Math.floor(Math.random() * 100)));
                    target.loyalty = Math.max(0, target.loyalty - 5);
                } else {
                    if (Math.random() > 0.6) {
                        target.ownerId = gen.id;
                        this.log(`${gen.name}軍が ${target.name} を制圧しました。`);
                    }
                }
            }
        } else if (rand < 0.4) {
            // Internal affairs (Develop, Commerce, Flood)
            const subRand = Math.random();
            if (subRand < 0.3) t.development = Math.min(100, t.development + 5);
            else if (subRand < 0.6) t.commerce = Math.min(100, t.commerce + 5);
            else t.floodControl = Math.min(100, t.floodControl + 5);
        } else if (rand < 0.6) {
            // Military Affairs (Train, Arm)
            const subRand = Math.random();
            if (subRand < 0.7) t.training = Math.min(100, t.training + 10);
            else t.armament = Math.min(100, t.armament + 5);
        } else if (rand < 0.8) {
            t.soldiers += 150;
            t.loyalty = Math.max(0, t.loyalty - 2);
        } else {
            t.loyalty = Math.min(100, t.loyalty + 5);
        }
        this.nextAction();
    }

    updateResources() {
        this.territories.forEach(t => { 
            if (t.ownerId) { 
                // FC-style: Income based on stats
                // Shogyo affects Gold, Development affects Rice
                // Flood control slightly buffs income safety
                const goldIncome = 50 + t.commerce * 2 + Math.floor(t.floodControl / 2);
                const riceIncome = 80 + t.development * 3 + Math.floor(t.floodControl / 2);
                
                t.gold += goldIncome;
                t.rice += riceIncome;
            } 
        });
        
        // Update resources display for player in header
        const playerTerritories = this.territories.filter(t => t.ownerId === this.playerOwnedId);
        const totalGold = playerTerritories.reduce((sum, t) => sum + t.gold, 0);
        const totalRice = playerTerritories.reduce((sum, t) => sum + t.rice, 0);
        const playerStatEl = document.getElementById('player-resources');
        if (playerStatEl) {
            playerStatEl.innerText = `金: ${totalGold} | 米: ${totalRice}`;
        }
    }

    log(msg) { document.getElementById('message-log').innerText = msg; }

    toggleMinimap(show) {
        const overlay = document.getElementById('minimap-overlay');
        if (!overlay) return;
        if (show) {
            overlay.classList.remove('hidden');
            this.renderMinimap();
        } else {
            overlay.classList.add('hidden');
        }
    }

    renderMinimap() {
        if (!this.minimapCtx) return;
        const ctx = this.minimapCtx;
        const scale = 1000 / 4000; // 1/4
        
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 1000, 500);
        
        ctx.save();
        ctx.scale(scale, scale);
        
        // Hijack renderer for a moment
        const originalCtx = this.renderer.ctx;
        this.renderer.ctx = ctx;
        
        // Draw Guide Line
        this.renderer.drawJapanOutline();
        
        // Draw Nations
        this.territories.forEach(t => {
            ctx.fillStyle = (t.ownerId === this.playerOwnedId) ? "#3498db" : "#e74c3c";
            ctx.fillRect(t.gridX, t.gridY, 160, 160);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.strokeRect(t.gridX, t.gridY, 160, 160);
        });

        // Draw current view rectangle (adjust for zoom)
        const container = document.getElementById('map-world-container');
        if (container) {
            const z = this.zoom || 1.0;
            const rx = container.scrollLeft / z;
            const ry = container.scrollTop / z;
            const rw = container.clientWidth / z;
            const rh = container.clientHeight / z;

            ctx.strokeStyle = "#ffd700";
            ctx.lineWidth = 20;
            ctx.strokeRect(rx, ry, rw, rh);
            ctx.fillStyle = "rgba(255, 215, 0, 0.1)";
            ctx.fillRect(rx, ry, rw, rh);
        }
        
        this.renderer.ctx = originalCtx;
        ctx.restore();
    }

    update() {
        if (!this.ctx) return;
        
        try {
            if (this.state === 'MAP') {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.renderer.drawJapanOutline();
                
                if (this.territories) {
                    this.territories.forEach(t => {
                        const isSelected = this.selectedTerritory && this.selectedTerritory.id === t.id;
                        const isActing = this.actingTerritory && this.actingTerritory.id === t.id;
                        
                        const size = 160;
                        const x = t.gridX;
                        const y = t.gridY;
                        
                        this.ctx.fillStyle = isSelected ? "#333" : "#222";
                        this.ctx.fillRect(x, y, size, size);
                        this.ctx.strokeStyle = isSelected ? "#ffd700" : "#555";
                        this.ctx.lineWidth = isSelected ? 4 : 2;
                        this.ctx.strokeRect(x, y, size, size);

                        this.ctx.fillStyle = "#fff";
                        this.ctx.font = "bold 18px 'Outfit'";
                        this.ctx.textAlign = "center";
                        this.ctx.fillText(t.name, x + size/2, y + 40);

                        const owner = this.generals.find(g => g.id === t.ownerId);
                        this.ctx.fillStyle = t.ownerId === this.playerOwnedId ? "#3498db" : "#e74c3c";
                        this.ctx.font = "16px 'Outfit'";
                        this.ctx.fillText(owner ? owner.name : "なし", x + size/2, y + 70);

                        this.ctx.fillStyle = "#aaa";
                        this.ctx.font = "14px 'Outfit'";
                        this.ctx.fillText(`兵:${t.soldiers}`, x + size/2, y + 100);
                        
                        if (isActing) {
                            const pulse = (Math.sin(Date.now() / 200) + 1) / 2;
                            this.ctx.strokeStyle = `rgba(255, 215, 0, ${pulse})`;
                            this.ctx.lineWidth = 6;
                            this.ctx.strokeRect(x - 5, y - 5, size + 10, size + 10);
                        }
                    });
                }
            } else if (this.state === 'BATTLE' && this.battle && this.battleCtx) {
                this.battleCtx.clearRect(0, 0, this.battleCanvas.width, this.battleCanvas.height);
                this.battle.update();
            }
        } catch (e) {
            console.error("Update error:", e);
        }
        requestAnimationFrame(() => this.update());
    }
}

// main.js equivalent
window.addEventListener('load', () => {
    console.log("App loaded");
    const game = new Game('game-canvas');
});
