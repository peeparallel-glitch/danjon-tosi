import { createTerritories, INITIAL_GENERALS } from './data.js';
import { AssetManager } from './renderer.js';
import { Battle } from './battle.js';

export class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.renderer = new AssetManager(this.ctx);
        
        this.territories = createTerritories();
        this.generals = [...INITIAL_GENERALS];
        this.selectedTerritory = null;
        this.targetTerritory = null; // Track which territory is being attacked
        this.state = 'MAP'; // 'MAP' or 'BATTLE'
        this.battle = null;
        
        this.year = 1560;
        this.month = 1;
        
        this.setupCanvas();
        this.bindEvents();
        this.update();
    }

    setupCanvas() {
        this.canvas.width = 1000;
        this.canvas.height = 600;
        this.canvas.style.backgroundColor = '#000';
    }

    bindEvents() {
        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            if (this.state === 'MAP') {
                this.handleMapClick(mouseX, mouseY);
            } else if (this.state === 'BATTLE') {
                this.battle.handleClick(mouseX, mouseY);
            }
        });

        document.getElementById('btn-徴兵').addEventListener('click', () => this.conscript());
        document.getElementById('btn-出陣').addEventListener('click', () => this.startBattle());
    }

    handleMapClick(x, y) {
        const tileW = 100;
        const tileH = 100;
        
        const gridX = Math.floor(x / tileW);
        const gridY = Math.floor(y / tileH);
        
        const territory = this.territories.find(t => t.gridX === gridX && t.gridY === gridY);
        
        if (territory) {
            this.selectedTerritory = territory;
            this.showTerritoryInfo(territory);
        } else {
            this.selectedTerritory = null;
            document.getElementById('info-panel').classList.add('hidden');
        }
    }

    showTerritoryInfo(t) {
        const panel = document.getElementById('info-panel');
        panel.classList.remove('hidden');
        
        document.getElementById('territory-name').innerText = t.name;
        const owner = this.generals.find(g => g.id === t.ownerId);
        document.getElementById('territory-owner').innerText = `領主: ${owner ? owner.name : 'なし'}`;
        document.getElementById('territory-stats').innerText = `兵士: ${t.soldiers} | 金: ${t.gold} | 米: ${t.rice}`;
        
        const actionPanel = document.querySelector('.actions');
        if (t.ownerId === 1) {
            actionPanel.classList.remove('hidden');
            document.getElementById('btn-出陣').innerText = '出陣先を選択';
        } else {
            // Check if this enemy territory is adjacent to a player territory
            const isAdjacentToPlayer = this.territories.some(pt => 
                pt.ownerId === 1 && this.isAdjacent(pt, t)
            );
            
            if (isAdjacentToPlayer && this.selectedTerritory && this.selectedTerritory.ownerId === 1) {
                // If we have our own territory selected and click an adjacent enemy, show attack option
                actionPanel.classList.remove('hidden');
                document.getElementById('btn-出陣').innerText = 'ここに出陣！';
            } else {
                actionPanel.classList.add('hidden');
            }
        }
    }

    isAdjacent(t1, t2) {
        const dx = Math.abs(t1.gridX - t2.gridX);
        const dy = Math.abs(t1.gridY - t2.gridY);
        return (dx + dy === 1);
    }

    conscript() {
        if (!this.selectedTerritory || this.selectedTerritory.ownerId !== 1) return;
        this.selectedTerritory.soldiers += 500;
        this.log(`${this.selectedTerritory.name}で500人の兵を徴兵しました。`);
        this.updateUI();
        this.nextTurn();
    }

    startBattle() {
        if (!this.selectedTerritory) return;

        let enemyTerritory = null;
        
        if (this.selectedTerritory.ownerId === 1) {
            // If clicking 'Attack' from player territory, find any adjacent enemy
            enemyTerritory = this.territories.find(t => t.ownerId !== 1 && this.isAdjacent(this.selectedTerritory, t));
        } else {
            // If clicking 'Attack' while an enemy territory is selected
            enemyTerritory = this.selectedTerritory;
        }

        if (!enemyTerritory) {
            this.log("隣接する攻撃可能な領地がありません。");
            return;
        }

        const playerGeneral = this.generals.find(g => g.id === 1);
        const enemyGeneral = this.generals.find(g => g.id === enemyTerritory.ownerId);

        this.log(`${enemyTerritory.name}へ出陣！`);
        this.state = 'BATTLE';
        this.targetTerritory = enemyTerritory;
        document.getElementById('info-panel').classList.add('hidden');
        
        this.battle = new Battle(
            this.ctx, 
            this.renderer, 
            { ...playerGeneral, name: "自軍(" + playerGeneral.name + ")", soldiers: this.selectedTerritory.soldiers }, 
            { ...enemyGeneral, name: "敵軍(" + enemyGeneral.name + ")", soldiers: enemyTerritory.soldiers },
            (result) => this.endBattle(result)
        );
    }

    endBattle(result) {
        this.state = 'MAP';
        if (result === 'win') {
            this.log(`勝利！${this.targetTerritory.name}を制圧しました。`);
            this.targetTerritory.ownerId = 1; // Player takes over
            this.targetTerritory.soldiers = Math.floor(this.battle.playerHp / 2); // Split soldiers?
        } else {
            this.log("敗退...");
        }
        this.nextTurn();
    }

    nextTurn() {
        this.month++;
        if (this.month > 12) {
            this.month = 1;
            this.year++;
        }
        document.getElementById('current-year').innerText = `${this.year}年 ${this.month}月`;
        this.cpuTurn();
    }

    cpuTurn() {
        // Find all enemy territories
        const cpuTerritories = this.territories.filter(t => t.ownerId !== 1 && t.ownerId !== null);
        if (cpuTerritories.length === 0) return;

        // Pick a random CPU territory to act
        const actor = cpuTerritories[Math.floor(Math.random() * cpuTerritories.length)];
        
        // Find adjacent target (prioritize player)
        const targets = this.territories.filter(t => t.ownerId !== actor.ownerId && this.isAdjacent(actor, t));
        const playerTarget = targets.find(t => t.ownerId === 1);
        
        const target = playerTarget || targets[Math.floor(Math.random() * targets.length)];

        if (target) {
            const actorName = this.generals.find(g => g.id === actor.ownerId).name;
            if (target.ownerId === 1) {
                this.log(`${actorName}軍が我が領土 ${target.name} に攻め込んできました！`);
                // For now, let's just simulate a simple result or trigger a battle?
                // In a full game, this would trigger a defensive battle.
                // For this prototype, let's just reduce player soldiers slightly to show it happened.
                target.soldiers = Math.max(0, target.soldiers - 200);
            } else {
                this.log(`${actorName}軍が ${target.name} を攻撃中...`);
            }
        }
        
        this.updateResources();
    }

    updateResources() {
        // Update Gold/Rice for all territories
        this.territories.forEach(t => {
            if (t.ownerId) {
                t.gold += 100;
                t.rice += 100;
            }
        });
        this.updateUI();
    }

    log(msg) {
        const log = document.getElementById('message-log');
        log.innerText = msg;
    }

    updateUI() {
        if (this.selectedTerritory) {
            this.showTerritoryInfo(this.selectedTerritory);
        }
    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.state === 'MAP') {
            this.territories.forEach(t => {
                const isSelected = this.selectedTerritory && this.selectedTerritory.id === t.id;
                this.renderer.drawTerritory(t.gridX * 100, t.gridY * 100, 100, 100, t.ownerId, isSelected);
            });
        } else if (this.state === 'BATTLE') {
            this.battle.update();
        }

        requestAnimationFrame(() => this.update());
    }
}
