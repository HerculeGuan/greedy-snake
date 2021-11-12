import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }
    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
    }
    keyDownHandler(event: KeyboardEvent) {
        console.log(this);
        this.direction = event.key
    }
}
export default GameControl