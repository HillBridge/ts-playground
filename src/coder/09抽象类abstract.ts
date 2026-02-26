function makeArea(shape: Shape) {
    return shape.getArea()
}

// 抽象类
// 抽象方法/属性必须建立在抽象类的基础上
// 可以避免将自身当作实例使用
// ******* class类中继承+多态的实现 *******
abstract class Shape {
    // 抽象方法
    abstract getArea(): void
}

class Rectrangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        // 有继承必须调用super
        super()
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    r: number;
    constructor(r: number) {
        // 有继承必须调用super
        super()
        this.r = r
    }

    getArea() {
        return this.r * this.r * 3.14
    }
}


const r1 = new Rectrangle(10, 10)
console.log(makeArea(r1))

const c1 = new Circle(10)
console.log(makeArea(c1))

// makeArea(22343)
// makeArea(new Shape())