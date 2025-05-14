"use strict";
// 数字枚举 + 有默认值值递增
var OrderStatus1;
(function (OrderStatus1) {
    OrderStatus1[OrderStatus1["Pending"] = 0] = "Pending";
    OrderStatus1[OrderStatus1["Processing"] = 1] = "Processing";
    OrderStatus1[OrderStatus1["Paid"] = 2] = "Paid";
    OrderStatus1[OrderStatus1["Reject"] = 3] = "Reject";
    OrderStatus1[OrderStatus1["Unknown"] = 4] = "Unknown";
})(OrderStatus1 || (OrderStatus1 = {}));
// 数字枚举 给定默认值
var OrderStatus2;
(function (OrderStatus2) {
    OrderStatus2[OrderStatus2["Pending"] = 1] = "Pending";
    OrderStatus2[OrderStatus2["Processing"] = 2] = "Processing";
    OrderStatus2[OrderStatus2["Paid"] = 3] = "Paid";
    OrderStatus2[OrderStatus2["Reject"] = 4] = "Reject";
    OrderStatus2[OrderStatus2["Unknown"] = 5] = "Unknown";
})(OrderStatus2 || (OrderStatus2 = {}));
// 字符串枚举 给定默认值
var OrderStatus3;
(function (OrderStatus3) {
    OrderStatus3["Pending"] = "aa";
    OrderStatus3["Processing"] = "bb";
    OrderStatus3["Paid"] = "cc";
    OrderStatus3["Reject"] = "dd";
    OrderStatus3["Unknown"] = "ee";
})(OrderStatus3 || (OrderStatus3 = {}));
// 异构枚举 数字枚举和字符串枚举混合
var OrderStatus4;
(function (OrderStatus4) {
    OrderStatus4[OrderStatus4["Pending"] = 1] = "Pending";
    OrderStatus4["Processing"] = "bb";
    OrderStatus4[OrderStatus4["Paid"] = 3] = "Paid";
    OrderStatus4[OrderStatus4["Reject"] = 4] = "Reject";
    OrderStatus4["Unknown"] = "ee";
})(OrderStatus4 || (OrderStatus4 = {}));
