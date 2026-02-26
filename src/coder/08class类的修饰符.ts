class People {
    // 默认是public
    public name: string = 'apple'
    // private只能在类的内部使用
    private age: number = 12
    // 在类内部或者子类中使用
    protected _sex: number = 1
    // 只读
    readonly address: string = '';
    // 静态成员, 静态属性只能通过类来访问
    static time: string = '2026'

    getAge() {
        return this.age
    }

    setAge(newAge: number) {
        this.age = newAge
    }

    // 通过getters/setters访问属性

    get sex() {
        return this._sex
    }

    set sex(newSex) {
        this._sex = newSex
    }
}

class Teacher extends People {
    getSex() {
        return this.sex
    }
}

const p1 = new People()
console.log(p1.name)
p1.getAge()
p1.setAge(22)

const t1 = new Teacher()
t1.getSex()

console.log(People.time)


export {

}