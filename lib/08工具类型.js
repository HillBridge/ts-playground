"use strict";
// ===== 工具类型 =====
// ********* 在已经存在的type类型上进行修改, 来得到新的type类型 *********
// ts内置的映射类型
const user = {
    name: 'qiao',
    age: 18,
};
const user2 = {
    name: 'qiao',
    age: 18,
    email: 'qiao@gmail.com',
};
const user3 = {
    name: 'qiao',
    age: 18,
    email: 'qiao@gmail.com',
};
const user4 = {
    name: 'qiao',
    age: 18,
};
const user5 = {
    name: 'qiao',
};
const user6 = {
    111: {
        name: 'qiao',
        age: 18,
    },
    222: {
        name: 'qiao2',
        age: 19,
    },
};
