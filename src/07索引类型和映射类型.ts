// 索引类型: 就是对对象的key加类型



interface Product {
    name: string;
    price: number;
}


const pdt1: Product = {
    name: 'qiao',
    price: 18,
}

interface Products {
    [key: number]: Product
}

const pdt2: Products = {
    1: {
        name: 'qiao',
        price: 18,
    },
    2: {
        name: 'qiao',
        price: 18,
    }
}

pdt2['1']


type Keys = keyof Product

const k: Keys = 'name'
