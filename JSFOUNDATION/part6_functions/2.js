/*
create a fxn named "orderTea" that takes one paramenter, "teaType". Inside this function, create another function named "confirmOrder"
that returns a message like "order confirmed for chai".
call "confirmOrder" from within "orderTea" and return the result
*/

function orderTea (teaType){
    function confirmOrder() {
        return `order_confirmed for ${teaType}`  
    }
    return confirmOrder()
}
console.log(orderTea("chai"))