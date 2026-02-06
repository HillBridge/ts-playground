// 基本数据类型
const num1: string | number = 10

const str10: string = 'abc'

const flag: boolean = true

const arr10: (string | number)[] = [1, '2']

arr10.push(1)

const obj10: IUser = {
    name: 'John',
    age: 20
}

interface IUser {
    name: string
    age: number
}


const ud1 = undefined

let result: unknown;
if (flag) {
    result = 1
} else {
    result = '2'
}

function sum(num1: number, num2: number) {
    return num1 + num2
}

sum(1, 2)

const arr2: number[] = [1, 2, 3]
// 匿名函数中可以推倒出类型就不需要显式声明类型
arr2.map((item) => item * 2)

// never 类型使用场景
const handleMessage = (message: string | number | boolean) => {
    switch (typeof message) {
        case 'string':
            console.log('string')
            break
        case 'number':
            console.log('number')
            break
        case 'boolean':
            console.log('boolean')
            break
        default:
            // never 用来判断不可能情况, 督促写正确的代码逻辑
            const check: never = message
            return check
    }
}

handleMessage(1)
handleMessage('1')
handleMessage(true)

// 元组类型
const info: [string, number, number] = ['qiao', 18, 1.88]
console.log(info[0].length)

// 函数类型 + 泛型<T>
type fn = () => void

const setState = <T>(state: T): [T, (newState: T) => void] => {
    let currentState = state
    const changeState = (newState: T) => {
        currentState = newState
    }
    const resTuple: [T, (newState: T) => void] = [currentState, changeState]
    return resTuple
}

const [count, setCount] = setState(1)
console.log(count)
setState('2')

const [name, setName] = setState('qiao')
console.log(name)
setName('bridge')


// 对象添加类型, 属性添加可选
const printPoint = (point: { x: number, y: number, z?: number }) => {
    return `x: ${point.x}, y: ${point.y}`
}
printPoint({ x: 1, y: 2 })
printPoint({ x: 1, y: 2, z: 3 })

// 联合类型 |
type InfoType = string | number

const info1: InfoType = 'flase'
const info2: InfoType = 123

// 类型别名 用type来定义

type FnType = () => void
type PersonType = {
    name: string
    age: number
}




export { }