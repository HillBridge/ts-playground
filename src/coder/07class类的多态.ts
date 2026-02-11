class Animal {
    action() {
        console.log('animal action')
    }
}

class Dog extends Animal {
    action() {
        console.log('dog can running')
    }
}

class Fish extends Animal {
    action() {
        console.log('fish can swimming')
    }
}

function makeAction(animals: Animal[]) {
    animals.forEach((animal) => {
        animal.action()
    })
}

makeAction([new Dog(), new Fish()])



export {

}