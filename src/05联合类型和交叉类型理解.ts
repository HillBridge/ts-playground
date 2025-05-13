// ============== 对象类型 ==============
interface English {
    name: string;
    age: number
}

interface Chinese {
    count: number
}

// 对象的联合类型, 取两个类型中所有属性的并集, 定义属性可以1到多个
// 联合类型定义属性有多种情况
// 交叉类型定义属性只有一种情况 就是所有类型中的属性都必须有
type Person10 =  Chinese | English;

const u1: Person10 = {
    name: 'qiao',
    count: 12
}

const u2: Person10 = {
    name: 'qiao',
    age: 12
}

const u3: Person10 = {
    age: 12,
    count: 12
}

const u4: Person10 = {
    name: 'qiao',
    age: 12,
    count: 12
}

// 交叉类型 缺一不可 应该取两个类型中所有
type Person11 = Chinese & English;

const u5: Person11 = {
    name: 'qiao',
    age: 12,
    count: 12
}


// ============== 基本数据类型 ==============

type Person12 = string | number;

const u6: Person12 = 'qiao';
const u7: Person12 = 12;

type Person13 = string & number; // never

const u8: Person13 = 'qiao';
const u9: Person13 = 12;

type Person14 = string & 1
const u10: Person14 = 1 // never

type Person15 = string | 1
const u11: Person15 = 1
const u12: Person15 = 'qiao'


type Person16 = string | true
const u13: Person16 = 'qiao'
const u14: Person16 = true

type Person17 = string | boolean
const u15: Person17 = 'qiao'
const u16: Person17 = true  // 联合类型中 如果一个类型是never 那么这个类型就是never

type Person18 = string & boolean // 取公共部分 就是never


type Person19 = 1 | 2 | 3
const u17: Person19 = 1
const u18: Person19 = 2
const u19: Person19 = 3


type Person20 = 1 & 2 & 3 // never


type Person21 = null | symbol | undefined // 三者任何一个都可以

type Person22 = null & symbol & undefined // never 

















