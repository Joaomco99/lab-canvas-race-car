class Car {
    constructor(x, y, width, height, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = 'images/car.png';
        this.ctx = ctx;
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    moveLeft() {
        this.x -= 10;
    }
    moveRight() {
        this.x += 10;
    }
}


class Obstacle {
    constructor(x, y, width, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 10;
        this.color = 'red';
        this.ctx = ctx;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move() {

        this.y += 1;
    }
};