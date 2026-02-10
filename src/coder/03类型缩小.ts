// 1. typeof 类型缩小
type stringType = string | number

const printId = (id: stringType) => {
    if (typeof id === 'string') {
        id = id.toLowerCase()
    } else if (typeof id === 'number') {
        id = id.toFixed(2)
    }
    console.log(id)
}

// 2. 平等类型缩小 === 和 !== swich
type Direction = 'up' | 'down' | 'left' | 'right'

const changeDirection = (direction: Direction) => {
    switch (direction) {
        case 'up':
            console.log('up')
            break
        case 'down':
            console.log('down')
            break
        case 'left':
            console.log('left')
            break
        case 'right':
    }
}

// 3. instanceof 类型缩小
class Student {
    study() { }
}

class Teacher {
    teach() { }
}

const work = (p: Student | Teacher) => {
    if (p instanceof Student) {
        p.study()
    } else if (p instanceof Teacher) {
        p.teach()
    }
}


// 4. in 操作符类型缩小
// 枚举类型的一种方式
type Fish = {
    swimming: () => void
}

type Cat = {
    running: () => void
}

const animalAction = (animal: Fish | Cat) => {
    if ('swimming' in animal) {
        animal.swimming()
    } else if ('running' in animal) {
        animal.running()
    }
}

const fish: Fish = {
    swimming: () => {
        console.log('swimming')
    }
}

const cat: Cat = {
    running: () => {
        console.log('running')
    }
}

animalAction(fish)
animalAction(cat)