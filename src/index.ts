import "./style/index.less"
import GameControl from "./modules/GameControl"

const game = new GameControl()
setInterval(() => {
    game.move
}, 500)