const num1: number = 10

const str1: string = 'hello'

const bool1: boolean = false

const un1: undefined = undefined

const nu1: null = null

const arr1: string[] = ['1', '2', '3']
const arr2: Array<number | boolean> = [1, 2, 3, false]

const tuple1: [number, string] = [1, '1']

interface IUser {
    name: string,
    age: number
}

const user1: IUser = {
    name: 'John',
    age: 20
}

type Fn = (params: string) => boolean
const fn1:Fn  = (params) => { return true }
function fn2(name: string, age: number): void { }

// void 表示没有返回值
// never 表示没有返回值
// any 表示任意类型
// unknown 表示未知类型
// object 表示对象类型
// array 表示数组类型
// tuple 表示元组类型
// enum 表示枚举类型



