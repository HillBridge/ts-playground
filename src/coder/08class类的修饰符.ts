class People {
    // 默认是public
    public name: string = 'apple'
    // private只能在类的内部使用
    private age: number = 12
    // 
    protected sex: number = 1

    getAge() {
        return this.age
    }

    setAge(newAge: number) {
        this.age = newAge
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



export {

}