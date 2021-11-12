class ScorePanel {
    score = 0;
    level = 1;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;
    maxLevel: number;
    upLevel: number;
    constructor(maxLevel: number = 10, upLevel: number = 10) {
        this.maxLevel = maxLevel
        this.upLevel = upLevel
        this.scoreElement = document.getElementById('score')!
        this.levelElement = document.getElementById('level')!
    }
    addScore() {
        this.scoreElement.innerHTML = ++this.score + ''
        if (this.score % this.upLevel === 0) this.addLevel()
    }
    addLevel() {
        if (this.level < this.maxLevel) this.levelElement.innerHTML = ++this.level + ''
    }
}

export default ScorePanel