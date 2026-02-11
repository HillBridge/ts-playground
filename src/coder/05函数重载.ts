// 声明类型
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

// 具体实现
function add(num1: any, num2: any): any {
    return num1 + num2
}

add(1, 2)
add('a', 'b')

export { }