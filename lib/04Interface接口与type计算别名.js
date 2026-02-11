"use strict";
const p6 = {
    name: '张三',
    age: 18,
    address: '北京',
    run: () => {
        console.log('run');
    }
};
// 类实现接口  implements
class Person7 {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    run() {
        console.log('run');
    }
}
const p1 = {
    name: '张三',
    age: 18,
    address: '北京',
    gender: '男'
};
const p2 = {
    gender: '女',
};
// ******  
// 联合类型: 可以是所有类型中的一个、多个或者全部
// 交叉类型: 必须是所有类型的全部才可以
// ****
