const circle1 = {
    radius: 4,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter());

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle2.getDiameter());