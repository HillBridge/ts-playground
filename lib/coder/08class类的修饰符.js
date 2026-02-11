"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    constructor() {
        // 默认是public
        this.name = 'apple';
        // private只能在类的内部使用
        this.age = 12;
        // 
        this.sex = 1;
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
class Teacher extends People {
    getSex() {
        return this.sex;
    }
}
const p1 = new People();
console.log(p1.name);
p1.getAge();
p1.setAge(22);
const t1 = new Teacher();
