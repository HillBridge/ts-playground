function processOrder(order: {status: number}) {
    if(order.status === OrderStatus.Pending) {
        console.log('订单待处理')
    } else if(order.status === OrderStatus.Processing) {
        console.log('订单处理中')
    } else if(order.status === OrderStatus.Paid) {
        console.log('订单已完成')
    } else if (order.status === OrderStatus.Reject) {
        console.log('订单已拒绝')
    } else {
        console.log('未知状态')
    }
}

enum OrderStatus {
    Pending = 1,
    Processing = 9,
    Paid = 3,
    Reject = 4,
    Unknown = 7,
}

// 表驱动法 key: value对象的方式
// Record<key, value> 定义一个对象，key是number类型，value是函数类型
const orderHanders: Record<number, (order: {status: number}) => void> = {
    [OrderStatus.Pending]: function(order) {
        console.log('订单待处理')
    },
    [OrderStatus.Processing]: function(order) {
        console.log('订单处理中')
    },
    [OrderStatus.Paid]: function(order) {
        console.log('订单已完成')
    },
    [OrderStatus.Reject]: function(order) {
        console.log('订单已拒绝')
    },
    [OrderStatus.Unknown]: function(order) {
        console.log('未知状态')
    }
}

const processOrderNew = (order: {status: number}) => {
    const handler = orderHanders[order.status] || orderHanders[OrderStatus.Unknown]
    if(handler) {
        handler(order)
    } else {
        console.log('未知状态')
    }
}
