"use strict";
// 索引类型: 就是对对象的key加类型
const pdt1 = {
    name: 'qiao',
    price: 18,
};
const pdt2 = {
    1: {
        name: 'qiao',
        price: 18,
    },
    2: {
        name: 'qiao',
        price: 18,
    }
};
pdt2['1'];
const k = 'name';
