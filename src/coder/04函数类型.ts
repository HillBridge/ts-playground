// 1. 函数的类型, 函数以参数方式传递给函数
function foo() {
    console.log('foo')
}

function bar(fn: () => void) {
    fn()
}

bar(foo)


// 2. 定义函数参数与返回值类型

type addFnType = (num1: number, num2: number) => number
const add: addFnType = (num1: number, num2: number) => {
    return num1 + num2
}

add(1, 2)

// 函数 剩余参数
function sum(...args: number[]) {
    return args.reduce((a, b) => a + b)
}

sum(1, 2, 3)

function sum2(args: number[]) {
    return args.reduce((a, b) => a + b)
}

sum2([1, 2, 3])