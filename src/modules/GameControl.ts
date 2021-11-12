import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = 'ArrowRight';
    isLive: Boolean = true;
    timer: any;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        this.food.changePosition();
    }
    keyDownHandler(event: KeyboardEvent) {
        if (this.timer) {
            clearInterval(this.timer)
        }
        this.direction = event.key
        let speed = 330 - this.scorePanel.level * 30
        this.timer = setInterval(() => {
            this.isLive && this.move();
        }, speed);
    }
    move() {
        let x = this.snake.x;
        let y = this.snake.y;
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                y -= 10
                break
            case 'ArrowDown':
            case 'Down':
                y += 10
                break
            case 'ArrowLeft':
            case 'Left':
                x -= 10
                break
            case 'ArrowRight':
            case 'Right':
                x += 10
                break
        }

        this.eat(x, y);

        try {
            this.snake.x = x
            this.snake.y = y
        }
        catch (e: any) {
            alert(e.message)
            this.isLive = false
        }
    }

    eat(x: number, y: number) {
        if (x === this.food.x && y === this.food.y) {
            console.log('eat');
            this.food.changePosition();
            this.snake.addBody();
            this.scorePanel.addScore();
        }

    }
}
export default GameControl