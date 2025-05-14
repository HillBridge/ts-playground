"use strict";
// ********* interface type Record 的区别 *********
// 相同点 都可以用来定义对象的类型
const errorMessage = {
    400: 'Bad Request',
    500: 'Internal Server Error',
    404: 'Not Found',
};
errorMessage[400];
const featureFlags = {
    payout: true,
    refund: false,
    report: true,
};
featureFlags.payout = false;
const dictionary = {
    'payout': '支付',
    'refund': '退款',
    'report': '报表',
};
const dynamicConfig = {
    'payout': '支付',
    'refund': '退款',
    'report': '报表',
};
const formFields = {
    name: {
        label: '姓名',
        type: 'text',
        required: true,
    },
};
