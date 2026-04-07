export class Battle {
    constructor(ctx, renderer, player, enemy, onComplete) {
        this.ctx = ctx;
        this.renderer = renderer;
        this.player = player;
        this.enemy = enemy;
        this.onComplete = onComplete;
        
        this.playerHp = player.soldiers;
        this.playerMaxHp = player.soldiers;
        this.playerMp = Math.floor(player.intel / 2);
        this.playerMaxMp = this.playerMp;

        this.enemyHp = enemy.soldiers;
        this.enemyMaxHp = enemy.soldiers;
        this.enemyMp = Math.floor(enemy.intel / 2);

        this.turn = 'player'; // 'player' or 'enemy'
        this.isAnimating = false;
        this.showingTactics = false;
        this.shake = 0;
        this.battleLog = `${player.name} と ${enemy.name} の戦いが始まった！`;
        
        this.commands = [
            { id: 'attack', label: '攻撃', x: 100, y: 500, w: 100, h: 40 },
            { id: 'tactic_menu', label: '計略', x: 220, y: 500, w: 100, h: 40 },
            { id: 'retreat', label: '退却', x: 340, y: 500, w: 100, h: 40 }
        ];

        this.tacticOptions = [
            { id: 'fire', label: '火計 (5MP)', cost: 5, x: 100, y: 440, w: 100, h: 40 },
            { id: 'water', label: '水計 (8MP)', cost: 8, x: 220, y: 440, w: 100, h: 40 },
            { id: 'heal', label: '援軍 (10MP)', cost: 10, x: 340, y: 440, w: 100, h: 40 },
            { id: 'back', label: '戻る', cost: 0, x: 460, y: 440, w: 100, h: 40 }
        ];
    }

    handleClick(x, y) {
        if (this.isAnimating || this.turn !== 'player') return;
        
        if (this.showingTactics) {
            const tactic = this.tacticOptions.find(t => 
                x >= t.x && x <= t.x + t.w && y >= t.y && y <= t.y + t.h
            );
            if (tactic) {
                if (tactic.id === 'back') {
                    this.showingTactics = false;
                } else {
                    this.handleTactic(tactic);
                }
            }
        } else {
            const command = this.commands.find(c => 
                x >= c.x && x <= c.x + c.w && y >= c.y && y <= c.y + c.h
            );
            if (command) {
                this.handleBaseCommand(command.id);
            }
        }
    }

    handleBaseCommand(id) {
        if (id === 'attack') {
            this.performAttack('player', 'enemy');
        } else if (id === 'tactic_menu') {
            this.showingTactics = true;
        } else if (id === 'retreat') {
            this.onComplete('lose');
        }
    }

    handleTactic(tactic) {
        if (this.playerMp < tactic.cost) {
            this.battleLog = "MPが足りません！";
            return;
        }

        this.playerMp -= tactic.cost;
        this.showingTactics = false;
        
        if (tactic.id === 'fire' || tactic.id === 'water') {
            const multiplier = tactic.id === 'fire' ? 2.0 : 3.5;
            this.performTacticAttack('player', 'enemy', tactic.label, multiplier);
        } else if (tactic.id === 'heal') {
            this.performHeal('player', tactic.label);
        }
    }

    performAttack(from, to, multiplier = 1.0) {
        this.isAnimating = true;
        this.turn = from;
        
        const attacker = from === 'player' ? this.player : this.enemy;
        const currentSoldiers = from === 'player' ? this.playerHp : this.enemyHp;
        const power = attacker.power || 80;
        
        let damage = Math.floor((currentSoldiers * (power / 100)) * multiplier * (0.8 + Math.random() * 0.4));
        damage = Math.max(10, damage);
        
        this.battleLog = `${attacker.name} の攻撃！ ${damage} の兵が散った！`;
        this.shake = 20;

        setTimeout(() => {
            if (from === 'player') {
                this.enemyHp = Math.max(0, this.enemyHp - damage);
            } else {
                this.playerHp = Math.max(0, this.playerHp - damage);
            }
            this.shake = 0;
            this.isAnimating = false;
            this.checkBattleEnd(from);
        }, 800);
    }

    performTacticAttack(from, to, tacticName, multiplier) {
        this.isAnimating = true;
        const attacker = from === 'player' ? this.player : this.enemy;
        const intel = attacker.intel || 80;
        
        // Tactics depend on intelligence, not soldiers!
        let damage = Math.floor((intel * 10) * multiplier * (0.9 + Math.random() * 0.2));
        
        this.battleLog = `${attacker.name} は ${tacticName} を仕掛けた！ ${damage} のダメージ！`;
        this.shake = 30;

        setTimeout(() => {
            if (from === 'player') {
                this.enemyHp = Math.max(0, this.enemyHp - damage);
            } else {
                this.playerHp = Math.max(0, this.playerHp - damage);
            }
            this.shake = 0;
            this.isAnimating = false;
            this.checkBattleEnd(from);
        }, 1000);
    }

    performHeal(from, tacticName) {
        this.isAnimating = true;
        const attacker = from === 'player' ? this.player : this.enemy;
        const intel = attacker.intel || 80;
        
        let heal = Math.floor((intel * 15) * (0.9 + Math.random() * 0.2));
        
        this.battleLog = `${attacker.name} の ${tacticName}！ ${heal} の兵が回復した！`;

        setTimeout(() => {
            if (from === 'player') {
                this.playerHp = Math.min(this.playerMaxHp, this.playerHp + heal);
            } else {
                this.enemyHp = Math.min(this.enemyMaxHp, this.enemyHp + heal);
            }
            this.isAnimating = false;
            this.checkBattleEnd(from);
        }, 1000);
    }

    checkBattleEnd(lastAttacker) {
        if (this.playerHp <= 0) {
            this.battleLog = "敗北した...";
            setTimeout(() => this.onComplete('lose'), 1500);
        } else if (this.enemyHp <= 0) {
            this.battleLog = "勝利！";
            setTimeout(() => this.onComplete('win'), 1500);
        } else {
            if (lastAttacker === 'player') {
                this.turn = 'enemy';
                setTimeout(() => {
                    // CPU logic: use heal if low hp, else fire, or just attack
                    if (this.enemyHp < this.enemyMaxHp * 0.3 && this.enemyMp >= 10) {
                        this.enemyMp -= 10;
                        this.performHeal('enemy', '援軍');
                    } else if (this.enemyMp >= 5 && Math.random() > 0.5) {
                        this.enemyMp -= 5;
                        this.performTacticAttack('enemy', 'player', '火計', 2.0);
                    } else {
                        this.performAttack('enemy', 'player');
                    }
                }, 1000);
            } else {
                this.turn = 'player';
                this.battleLog = "あなたの番です。";
            }
        }
    }

    update() {
        const ctx = this.ctx;
        const renderer = this.renderer;
        
        ctx.fillStyle = "#1e1e1e";
        ctx.fillRect(0, 0, 1000, 600);
        
        const playerX = 200 + (this.shake > 0 && this.turn === 'enemy' ? (Math.random()-0.5)*this.shake : 0);
        const enemyX = 700 + (this.shake > 0 && this.turn === 'player' ? (Math.random()-0.5)*this.shake : 0);
        
        renderer.drawBattleUnit('left', playerX, 250, 100, this.playerHp, this.playerMaxHp);
        renderer.drawBattleUnit('right', enemyX, 250, 100, this.enemyHp, this.enemyMaxHp);
        
        // Draw MP Bars
        ctx.fillStyle = "#444";
        ctx.fillRect(playerX, 360, 100, 5);
        ctx.fillStyle = "#3498db";
        ctx.fillRect(playerX, 360, (this.playerMp / this.playerMaxMp) * 100, 5);

        ctx.fillStyle = "#fff";
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        ctx.fillText(this.player.name, 250, 400);
        ctx.fillText(`MP: ${this.playerMp}`, 250, 425);
        ctx.fillText(this.enemy.name, 750, 400);

        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(50, 50, 900, 100);
        ctx.fillStyle = "#fff";
        ctx.font = "18px Arial";
        ctx.textAlign = "left";
        ctx.fillText(this.battleLog, 80, 100);

        if (this.turn === 'player' && !this.isAnimating) {
            const options = this.showingTactics ? this.tacticOptions : this.commands;
            options.forEach(c => {
                ctx.fillStyle = "#444";
                ctx.fillRect(c.x, c.y, c.w, c.h);
                ctx.strokeStyle = "#d4af37";
                ctx.strokeRect(c.x, c.y, c.w, c.h);
                
                ctx.fillStyle = "#fff";
                ctx.font = "16px Arial";
                ctx.textAlign = "center";
                ctx.fillText(c.label, c.x + c.w/2, c.y + c.h/2 + 6);
            });
        }
    }
}
