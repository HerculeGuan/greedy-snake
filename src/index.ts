import "./style/index.less"
class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }
    get x() {
        return this.element.offsetLeft
    }
    get y() {
        return this.element.offsetTop
    }
    changePosition() {
        let randomLeft = Math.round(Math.random() * 29) * 10
        let randomRight = Math.round(Math.random() * 29) * 10
        this.element.style.left = `${randomLeft}px`
        this.element.style.top = `${randomRight}px`
    }
}


class ScorePanel {
    score = 0;
    level = 1;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;
    constructor() {
        this.scoreElement = document.getElementById('score')!
        this.levelElement = document.getElementById('level')!
    }
    addScore() {
        this.scoreElement.innerHTML = ++this.score + ''
    }
    addLevel() {
        if (this.level < 10) {
            this.levelElement.innerHTML = ++this.level + ''
        }

    }

}

const food = new Food();
const scorePanel = new ScorePanel();

setInterval(() => {
    food.changePosition()
    scorePanel.addScore()
    scorePanel.addLevel()
}, 1000)
