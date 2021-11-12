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
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.x) {
                value = this.x - 10
            } else {
                value = this.x + 10

            }
        }
        this.checkValue(value)
        this.head.style.left = `${value}px`
    }
    set y(value: number) {
        if (this.y === value) return
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.y) {
                value = this.y - 10
            } else {
                value = this.y + 10

            }
        }
        this.checkValue(value)
        this.head.style.top = `${value}px`
    }
    checkValue(value: number) {
        if (value < 0 || value > 290) {
            throw new Error('Game OVER')
        }
        this.checkCrash()
        this.moveBody()
    }
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = `${x}px`;
            (this.bodies[i] as HTMLElement).style.top = `${y}px`;
        }
    }
    checkCrash() {
        for (let i = 1; i < this.bodies.length; i++) {
            let el = this.bodies[i] as HTMLElement
            if (el.offsetLeft === this.x && el.offsetTop === this.y) {
                throw new Error('Game OVER')
            }
        }
    }
}

export default Snake