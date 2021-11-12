import "./style/index.less"
import GameControl from "./modules/GameControl"

const game = new GameControl()
setInterval(() => {
    console.log(game.direction);
}, 500)