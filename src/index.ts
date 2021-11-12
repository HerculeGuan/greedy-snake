import "./style/index.less"
import Food from "./modules/Food"
import ScorePanel from "./modules/ScorePanel"

const food = new Food();
const scorePanel = new ScorePanel();

setInterval(() => {
    food.changePosition()
    scorePanel.addScore()
}, 1000)