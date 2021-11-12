class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector("#snake div")!
        this.bodies = this.element.getElementsByTagName('div')
    }
    get x() {
        return this.head.offsetLeft
    }
    get y() {
        return this.head.offsetTop
    }
    set x(value: number) {
        if (this.x === value) return
        if (value < 0 || value > 290) {
            throw new Error('Game OVER')
        }
        this.head.style.left = `${value}px`
    }
    set y(value: number) {
        if (this.y === value) return
        if (value < 0 || value > 290) {
            throw new Error('Game OVER')
        }
        this.head.style.top = `${value}px`
    }
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}

export default Snake