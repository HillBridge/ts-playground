"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 基本数据类型
const num1 = 10;
const str10 = 'abc';
const flag = true;
const arr10 = [1, '2'];
arr10.push(1);
const obj10 = {
    name: 'John',
    age: 20
};
const ud1 = undefined;
let result;
if (flag) {
    result = 1;
}
else {
    result = '2';
}
function sum(num1, num2) {
    return num1 + num2;
}
sum(1, 2);
const arr2 = [1, 2, 3];
// 匿名函数中可以推倒出类型就不需要显式声明类型
arr2.map((item) => item * 2);
// never 类型使用场景
const handleMessage = (message) => {
    switch (typeof message) {
        case 'string':
            console.log('string');
            break;
        case 'number':
            console.log('number');
            break;
        case 'boolean':
            console.log('boolean');
            break;
        default:
            // never 用来判断不可能情况, 督促写正确的代码逻辑
            const check = message;
            return check;
    }
};
handleMessage(1);
handleMessage('1');
handleMessage(true);
// 元组类型
const info = ['qiao', 18, 1.88];
console.log(info[0].length);
const setState = (state) => {
    let currentState = state;
    const changeState = (newState) => {
        currentState = newState;
    };
    const resTuple = [currentState, changeState];
    return resTuple;
};
const [count, setCount] = setState(1);
console.log(count);
setState('2');
const [name, setName] = setState('qiao');
console.log(name);
setName('bridge');
// 对象添加类型, 属性添加可选
const printPoint = (point) => {
    return `x: ${point.x}, y: ${point.y}`;
};
printPoint({ x: 1, y: 2 });
printPoint({ x: 1, y: 2, z: 3 });
const info1 = 'flase';
const info2 = 123;
