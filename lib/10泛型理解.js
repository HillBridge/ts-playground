"use strict";
// 泛型理解
// 只能处理字符串类型的数组
const func1 = (arr) => {
    return arr[1];
};
const func2 = (arr) => {
    return arr[1];
};
// 泛型函数
const func3 = (arr) => {
    return arr[1];
};
func1(['1', '2', '3']);
func2([1, 2, 3]);
func3(['1', '2', '3']);
func3([1, 2, 3]);
func3([true, false, true]);
const numberContainter = {
    value: 1,
    getValue: () => 1,
    setValue: (value) => {
        console.log(value);
    }
};
const stringContainter = {
    value: '1',
    getValue: () => '1',
    setValue: (value) => {
        console.log(value);
    }
};
// 3. 泛型类
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
}
const numberStorage = new DataStorage();
// numberStorage.addItem('1') 报错 类型限制为number
numberStorage.addItem(2);
numberStorage.addItem(3);
const printLength = (target) => {
    return target.length;
};
printLength('123');
printLength({ length: 123 });
// printLength(123) 报错 类型“number”不满足约束“Lengthwise”。
// ========== 泛型应用场景 ==========
//1. 数据结构和集合类
const arr = [1, 2, 3]; // 泛型
const arr20 = [123]; // 普通数组
const arr30 = ['aa', 'bb', 'cc']; // 普通数组
const arrAny = [1, '2', true]; // 普通数组
// 自定义数据结构 栈
class Stack {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove() {
        this.data.pop();
    }
}
