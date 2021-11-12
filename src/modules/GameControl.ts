import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = 'ArrowRight';
    isLive: Boolean = false
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        this.move();
    }
    keyDownHandler(event: KeyboardEvent) {
        console.log(this.direction);
        this.direction = event.key
    }
    move() {
        let speed = 330 - this.scorePanel.level * 30

        setTimeout(() => {
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

            this.snake.x = x
            this.snake.y = y

            this.isLive && this.move()

        }, speed)



    }
}
export default GameControl