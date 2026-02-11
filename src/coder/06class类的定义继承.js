"use strict";
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.eatting = function () {
        console.log('person eatting');
    };
    return Person;
}());
var p1 = new Person('abai', 13);
p1.eatting();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, stuNo) {
        // super执行会调用父类中的constructor
        var _this = _super.call(this, name, age) || this;
        _this.stuNo = stuNo;
        return _this;
    }
    Student.prototype.studying = function () {
        // 可以通过super调用父类中的方法
        _super.prototype.eatting.call(this);
        console.log('student studying');
    };
    return Student;
}(Person));
var stu1 = new Student('bridge', 18, 111);
stu1.eatting();
stu1.studying();
