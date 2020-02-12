function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(first_name, last_name){
    return first_name + " " + last_name;
}

function makeHalfPrice(val){
    return val*0.5;
}

function countBooks(listCount) {
    
    return listCount.length;
}

function isInStock(book){
    if (book.quantity > 0){
        return true;
    }else{
        return false;
    }
}


function getTotalOrderPrice(P, Q) {
    const vat = 0.2
    let discount = (P*Q)*vat;
    return (P*Q)+discount;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};