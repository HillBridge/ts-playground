"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eatting() {
        console.log('person eatting');
    }
}
const p1 = new Person('abai', 13);
p1.eatting();
class Student extends Person {
    constructor(name, age, stuNo) {
        // super执行会调用父类中的constructor
        super(name, age);
        this.stuNo = stuNo;
    }
    studying() {
        // 可以通过super调用父类中的方法
        super.eatting();
        console.log('student studying');
    }
    // 子类可以重写父类中的方法
    eatting() {
        console.log('student eatting');
    }
}
const stu1 = new Student('bridge', 18, 111);
stu1.eatting();
stu1.studying();
