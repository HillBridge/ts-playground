// 泛型理解

// 只能处理字符串类型的数组
const func1 = (arr: string[]) => {
    return arr[1]
}

const func2 = (arr: number[]) => {
    return arr[1]
}

// 泛型函数
const func3 = <T>(arr: T[]): T => {
    return arr[1]
}

func1(['1', '2', '3'])
func2([1, 2, 3])
func3<string>(['1', '2', '3'])
func3<number>([1, 2, 3])
func3<boolean>([true, false, true])

// 2. 泛型接口
interface Containter<T> {
    value: T,
    getValue: () => T,
    setValue: (value: T) => void
}

const numberContainter: Containter<number> = {
    value: 1,
    getValue: () => 1,
    setValue: (value) => {
        console.log(value)
    }
}

const stringContainter: Containter<string> = {
    value: '1',
    getValue: () => '1',
    setValue: (value) => {
        console.log(value)
    }
}

// 3. 泛型类
class DataStorage<T> {
    data: T[] = []
    
    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
}

const numberStorage = new DataStorage<number>()
// numberStorage.addItem('1') 报错 类型限制为number
numberStorage.addItem(2)
numberStorage.addItem(3)

// 4. 泛型约束
interface Lengthwise {
    length: number
}

const printLength = <T extends Lengthwise>(target: T) => {
    return target.length
} 

printLength('123')
printLength({ length: 123 })
// printLength(123) 报错 类型“number”不满足约束“Lengthwise”。

// ========== 泛型应用场景 ==========

//1. 数据结构和集合类
const arr: Array<number> = [1, 2, 3] // 泛型

const arr20: number[] = [123] // 普通数组
const arr30: string[] = ['aa', 'bb', 'cc'] // 普通数组
const arrAny: any[] = [1, '2', true] // 普通数组

// 自定义数据结构 栈
class Stack<T> {
    private data: T[] =[]
    
    add(item: T) {
        this.data.push(item)
    }

    remove() {
        this.data.pop()
    }
}














