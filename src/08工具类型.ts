// ===== 工具类型 =====
// ********* 在已经存在的type类型上进行修改, 来得到新的type类型 *********
// ts内置的映射类型


// Partial<type> 将type的属性变为可选
interface User {
    name: string;
    age: number;
    email?: string; // ? 表示可选
}

type PartialUser = Partial<User>

const user: PartialUser = {
    name: 'qiao',
    age: 18,
}


// Required<type> 将type的属性变为必选

type RequiredUser = Required<User>

const user2: RequiredUser = {
    name: 'qiao',
    age: 18,
    email: 'qiao@gmail.com',
}

// Readonly<type> 将type中的所有属性都变成只读

type ReadonlyUser = Readonly<User>

const user3: ReadonlyUser = {
    name: 'qiao',
    age: 18,
    email: 'qiao@gmail.com',
}

// user3.name = 'qiao2' // 报错 因为是只读


// Pick<type, keys> 从type中选择一组属性

type PickUser = Pick<User, 'name' | 'age'>

const user4: PickUser = {
    name: 'qiao',
    age: 18,
}

// Omit<type, keys> 从type中移除一组属性

type OmitUser = Omit<User, 'age' | 'email'>

const user5: OmitUser = {
    name: 'qiao',
}

// Record<keys, type> keys 是key的联合类型, type 是value的类型
// keys是对象中key的类型 type是对象中value的类型

type RecordUser = Record<number, User>

const user6: RecordUser = {
    111: {
        name: 'qiao',
        age: 18,
    },
    222: {
        name: 'qiao2',
        age: 19,
    },
}



