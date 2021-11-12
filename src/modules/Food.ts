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
export default Food