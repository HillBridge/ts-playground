// ********* interface type Record 的区别 *********
// 相同点 都可以用来定义对象的类型

// interface 可以重复定义, 会自动合并
// interface 可以继承 extends
// interface 可以实现class类的类型定义 implements
// interface 是明确对象内部的结构, 知道对象有哪些属性, 以及属性类型
// interface 可以被类实现, 也可以被type实现
interface User2 {
    name: string;
    age: number;
    email: string;
    address: string;
}


// Record<keys, type> 是动态的键值对容器 区别就是动态
// keys可以是数字 字符串 符号的联合类型
// 适用于字典 映射等场景

// 1. 场景1 错误消息映射
type ErrorCode = '400' | '500' | '404'
type ErrorRecord = Readonly<Record<ErrorCode, string>>

const errorMessage: ErrorRecord = {
    400: 'Bad Request',
    500: 'Internal Server Error',
    404: 'Not Found',
}

errorMessage[400]
// 2. 场景2 功能开关
type FeatureFlags = 'payout' | 'refund' | 'report'
type FeatureFlagsRecord = Record<FeatureFlags, boolean>

const featureFlags: FeatureFlagsRecord = {
    payout: true,
    refund: false,
    report: true,
}   

featureFlags.payout = false

// 3. 场景3 更通用灵活的字典

type Dictionary = Record<string, string>

const dictionary: Dictionary = {
    'payout': '支付',
    'refund': '退款',
    'report': '报表',   
}

// 4. 场景4 动态配置

type DynamicConfig = Record<string, string | number | boolean>

const dynamicConfig: DynamicConfig = {
    'payout': '支付',
    'refund': '退款',
    'report': '报表',
}

// 5. 场景5 动态表单

type FormField = Record<string, {
    label: string;
    type: 'text' | 'number' | 'boolean';
    required: boolean;
}>

const formFields: FormField = {
    name: {
        label: '姓名',
        type: 'text',
        required: true,
    },
}

