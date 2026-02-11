"use strict";
// 类型断言是将宽泛的类型转成更具体的类型
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
// const id = document.getElementById('app') as HTMLElement
// id.innerHTML = 'hello'
// const image = document.querySelector('img') as HTMLImageElement
// image.src = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
// class 继承后的类型断言
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    sayHi() {
        console.log('hi');
    }
}
const stu = new Student('qiao');
function sayHello(p) {
    p.sayHi();
}
sayHello(stu);
// 非空类型断言 ==》可以逃过ts的编译阶段, 但是在代码执行阶段会报错
function printLength(string) {
    return string === null || string === void 0 ? void 0 : string.length;
}
printLength('hello');
printLength();
const info = {
    name: 'qiao',
    // friend: {
    //     name: 'qiao2'
    // }
};
console.log((_a = info.friend) === null || _a === void 0 ? void 0 : _a.name);
console.log((_b = info.friend) === null || _b === void 0 ? void 0 : _b.age);
// ?? 空值合并运算符
const message = null;
const res = message !== null && message !== void 0 ? message : 'default';
console.log(res);
function request(url, method) {
}
const requestInfo = {
    url: 'https://www.baidu.com',
    method: 'GET'
};
// 1. as断言模式
request(requestInfo.url, requestInfo.method);
// 2. 对实参加类型约束
const requestInfo2 = {
    url: 'https://www.baidu.com',
    method: 'GET'
};
request(requestInfo2.url, requestInfo2.method);
