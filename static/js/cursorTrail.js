// Cursor Trail Effect
class CursorTrail {
    constructor() {
        this.container = document.getElementById('cursorTrail');
        this.trails = [];
        this.maxTrails = 20;
        
        this.init();
    }
    
    init() {
        // Mouse events for desktop
        document.addEventListener('mousemove', (e) => this.addTrail(e.clientX, e.clientY));
        
        // Touch events for mobile
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                this.addTrail(touch.clientX, touch.clientY);
            }
        }, { passive: true });
        
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                this.addTrail(touch.clientX, touch.clientY);
            }
        }, { passive: true });
    }
    
    addTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail-dot';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        
        this.container.appendChild(trail);
        this.trails.push(trail);
        
        // Remove after animation
        setTimeout(() => {
            trail.remove();
            this.trails.shift();
        }, 800);
        
        // Limit trail count
        if (this.trails.length > this.maxTrails) {
            const oldTrail = this.trails.shift();
            if (oldTrail) oldTrail.remove();
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new CursorTrail();
});
