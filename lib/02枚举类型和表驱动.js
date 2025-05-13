"use strict";
function processOrder(order) {
    if (order.status === OrderStatus.Pending) {
        console.log('订单待处理');
    }
    else if (order.status === OrderStatus.Processing) {
        console.log('订单处理中');
    }
    else if (order.status === OrderStatus.Paid) {
        console.log('订单已完成');
    }
    else if (order.status === OrderStatus.Reject) {
        console.log('订单已拒绝');
    }
    else {
        console.log('未知状态');
    }
}
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 1] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 9] = "Processing";
    OrderStatus[OrderStatus["Paid"] = 3] = "Paid";
    OrderStatus[OrderStatus["Reject"] = 4] = "Reject";
    OrderStatus[OrderStatus["Unknown"] = 7] = "Unknown";
})(OrderStatus || (OrderStatus = {}));
// 表驱动法 key: value对象的方式
// Record<key, value> 定义一个对象，key是number类型，value是函数类型
const orderHanders = {
    [OrderStatus.Pending]: function (order) {
        console.log('订单待处理');
    },
    [OrderStatus.Processing]: function (order) {
        console.log('订单处理中');
    },
    [OrderStatus.Paid]: function (order) {
        console.log('订单已完成');
    },
    [OrderStatus.Reject]: function (order) {
        console.log('订单已拒绝');
    },
    [OrderStatus.Unknown]: function (order) {
        console.log('未知状态');
    }
};
const processOrderNew = (order) => {
    const handler = orderHanders[order.status] || orderHanders[OrderStatus.Unknown];
    if (handler) {
        handler(order);
    }
    else {
        console.log('未知状态');
    }
};
