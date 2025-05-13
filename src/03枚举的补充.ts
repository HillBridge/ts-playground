// 数字枚举 + 有默认值值递增
enum OrderStatus1 {
    Pending,
    Processing,
    Paid,
    Reject,
    Unknown,
}
// 数字枚举 给定默认值
enum OrderStatus2 {
    Pending = 1,
    Processing = 2,
    Paid = 3,
    Reject = 4,
    Unknown = 5,
}

// 字符串枚举 给定默认值
enum OrderStatus3 {
    Pending = 'aa',
    Processing = 'bb',
    Paid = 'cc',
    Reject = 'dd',
    Unknown = 'ee',
}
 // 异构枚举 数字枚举和字符串枚举混合
enum OrderStatus4 {
    Pending = 1,
    Processing = 'bb',
    Paid = 3,
    Reject = 4,
    Unknown = 'ee'
}

// 常量枚举 常量枚举在编译阶段会被删除 在执行代码时运行
const enum OrderStatus5 {
    Pending = 1,
    Processing = 2,
}
