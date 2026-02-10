
// 类型断言是将宽泛的类型转成更具体的类型

// const id = document.getElementById('app') as HTMLElement

// id.innerHTML = 'hello'

// const image = document.querySelector('img') as HTMLImageElement

// image.src = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'

// class 继承后的类型断言
class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class Student extends Person {
    sayHi() {
        console.log('hi')
    }
}

const stu = new Student('qiao')


function sayHello(p: Person) {
    (p as Student).sayHi()
}

sayHello(stu)

// 非空类型断言 ==》可以逃过ts的编译阶段, 但是在代码执行阶段会报错
function printLength(string?: string) {
    return string?.length
}

printLength('hello')
printLength()

// console.log(printLength())


// 可选链操作符
type Info = {
    name: string
    friend?: {
        name: string,
        age?: number
    }
}

const info: Info = {
    name: 'qiao',
    // friend: {
    //     name: 'qiao2'
    // }
}


console.log(info.friend?.name)
console.log(info.friend?.age)


// ?? 空值合并运算符
const message: string | null = null
const res = message ?? 'default'
console.log(res)

// 自面量类型与联合类型一起结合使用
type Direction = 'up' | 'down' | 'left' | 'right'

// 自面量推理
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
function request(url: string, method: RequestMethod) {

}
const requestInfo = {
    url: 'https://www.baidu.com',
    method: 'GET'
}

// 1. as断言模式
request(requestInfo.url, requestInfo.method as RequestMethod)

// 2. 对实参加类型约束
const requestInfo2 = {
    url: 'https://www.baidu.com',
    method: 'GET' as RequestMethod
}
request(requestInfo2.url, requestInfo2.method)


export { }
