"use strict";
// 类型断言是将宽泛的类型转成更具体的类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// const id = document.getElementById('app') as HTMLElement
// id.innerHTML = 'hello'
// const image = document.querySelector('img') as HTMLImageElement
// image.src = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
// class 继承后的类型断言
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.sayHi = function () {
        console.log('hi');
    };
    return Student;
}(Person));
var stu = new Student('qiao');
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
var info = {
    name: 'qiao',
    // friend: {
    //     name: 'qiao2'
    // }
};
console.log(info.friend);
