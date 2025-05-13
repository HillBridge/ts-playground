// interface 接口主要来定义对象的结构
interface Person {
    name: string
    age: number
}

interface Person {
    address: string
}
// interface 继承 extends
interface Person6 extends Person {
    run: () => void
}

const p6: Person6 = {
    name: '张三',
    age: 18,
    address: '北京',
    run: () => {
        console.log('run')
    }
}
// 类实现接口  implements
class Person7 implements Person6 {
    name: string
    age: number
    address: string
    constructor(name: string, age: number, address: string) {
        this.name = name
        this.age = age
        this.address = address
    }
    run() {
        console.log('run')
    }
}
// type 计算别名 主要来定义类型, 可以计算对象, 联合类型, 交叉类型
type Person2 = {
    name: string
    age: number
}

// 交叉类型 必须是所有类型合集
type Person3 = Person & {
    gender: string
}

const p1: Person3 = {
    name: '张三',
    age: 18,
    address: '北京',
    gender: '男'
}

// 联合类型 或的关系 可以是类型其中之一 也可以是所有类型合集
type Person4 = Person | {
    gender: string
}
const p2: Person4 = {
    gender: '女',
}





