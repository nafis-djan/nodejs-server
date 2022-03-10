const OrderStatus = {
    content : [
        "CREATING",
        "PENDING",
        "ASSEMBLY",
        "IN_STOCK",
        "IN_TRANSIT",
        "AWAITING_PICKUP",
        "COMPLETED",
        "CANCELLED"
    ]
};

Object.freeze(OrderStatus)

module.exports = OrderStatus