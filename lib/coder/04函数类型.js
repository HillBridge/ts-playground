"use strict";
// 1. 函数的类型, 函数以参数方式传递给函数
function foo() {
    console.log('foo');
}
function bar(fn) {
    fn();
}
bar(foo);
const add = (num1, num2) => {
    return num1 + num2;
};
add(1, 2);
// 函数 剩余参数
function sum(...args) {
    return args.reduce((a, b) => a + b);
}
sum(1, 2, 3);
function sum2(args) {
    return args.reduce((a, b) => a + b);
}
sum2([1, 2, 3]);
