export class AssetManager {
    constructor(ctx) {
        this.ctx = ctx;
    }

    drawTerritory(x, y, width, height, ownerId, isSelected) {
        const ctx = this.ctx;
        
        // Background (Grass/Flat land)
        ctx.fillStyle = "#2d5a27"; // Dark Green
        ctx.fillRect(x, y, width, height);
        
        // Border
        ctx.strokeStyle = isSelected ? "#fff" : "#444";
        ctx.lineWidth = isSelected ? 3 : 1;
        ctx.strokeRect(x, y, width, height);

        // Owner indicator
        if (ownerId !== null) {
            // Castle (Brown square)
            ctx.fillStyle = "#8b4513";
            ctx.fillRect(x + width/4, y + height/4, width/2, height/2);
            
            // Army (Blue for player, Red for enemy)
            ctx.fillStyle = ownerId === 1 ? "#3498db" : "#e74c3c";
            ctx.fillRect(x + width/3, y + height/3, width/3, width/3);
        }
    }

    drawBattleUnit(side, x, y, size, hp, maxHp) {
        const ctx = this.ctx;
        
        // Side: 'left' or 'right'
        ctx.fillStyle = side === 'left' ? "#3498db" : "#e74c3c";
        ctx.fillRect(x, y, size, size);
        
        // HP Bar
        const barWidth = size;
        const barHeight = 10;
        ctx.fillStyle = "#444";
        ctx.fillRect(x, y - 20, barWidth, barHeight);
        
        ctx.fillStyle = "#2ecc71";
        const currentHpWidth = (hp / maxHp) * barWidth;
        ctx.fillRect(x, y - 20, currentHpWidth, barHeight);
        
        // Text
        ctx.fillStyle = "#fff";
        ctx.font = "bold 14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`${hp}`, x + size/2, y - 25);
    }
}
