const getLength = (target: string | number) => {
    // 类型断言 告诉编译器 我知道这个类型是什么
    // value as type
   return (target as string).length
}

const getLength2 = (target: string | number) => {
   // 类型保护 对传入的值进行兼容处理
  if(typeof target === 'string') {
    return target.length
  } else if(typeof target === 'number') {
    return target.toString().length
  } else {
    return 0
  }
}

class Per1 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Per2 {
    name2: string;
    age2: number;
    constructor(name: string, age: number) {
        this.name2 = name;
        this.age2 = age;
    }
}

const fn = (input: Per1 | Per2) => {
    // 类型保护 判断实例类型 instanceof实例的类型
    if(input instanceof Per1) {
        return input.age
    } else if(input instanceof Per2) {
        return input.age2
    }
}

