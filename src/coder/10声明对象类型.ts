
// 方式1: type来定义类型
type InfoType = {
    name: string,
    age: number
}
// 2. interface接口定义

interface InfoType2 {
    readonly name: string,
    age: number,
    addr?: string // 可选类型?
}


const info: InfoType2 = {
    name: 'abai',
    age: 12
}

// info.name = 12

// ====== 2. 接口的索引类型

interface frontLanguageType {
    [index: number]: string
}

const frontLanguage: frontLanguageType = {
    0: 'html',
    1: 'css',
    2: 'js'
}

interface languageYearType {
    [lang: string]: number
}
const languageYear: languageYearType = {
    'c': 1972,
    'js': 1995
}

// ======= 3. 函数类型