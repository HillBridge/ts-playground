"use strict";
const printId = (id) => {
    if (typeof id === 'string') {
        id = id.toLowerCase();
    }
    else if (typeof id === 'number') {
        id = id.toFixed(2);
    }
    console.log(id);
};
const changeDirection = (direction) => {
    switch (direction) {
        case 'up':
            console.log('up');
            break;
        case 'down':
            console.log('down');
            break;
        case 'left':
            console.log('left');
            break;
        case 'right':
    }
};
// 3. instanceof 类型缩小
class Student {
    study() { }
}
class Teacher {
    teach() { }
}
const work = (p) => {
    if (p instanceof Student) {
        p.study();
    }
    else if (p instanceof Teacher) {
        p.teach();
    }
};
const animalAction = (animal) => {
    if ('swimming' in animal) {
        animal.swimming();
    }
    else if ('running' in animal) {
        animal.running();
    }
};
const fish = {
    swimming: () => {
        console.log('swimming');
    }
};
const cat = {
    running: () => {
        console.log('running');
    }
};
animalAction(fish);
animalAction(cat);
