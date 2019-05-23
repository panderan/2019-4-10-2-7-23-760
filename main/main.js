function nonnegative(num) {
    return num>0 ? num:0 
}

module.exports = function main(inputs) {
    price = (nonnegative(inputs.distance - 8)/2 + 
             nonnegative(inputs.distance -2)) *
            0.8
    price += inputs.parkTime*0.25
    return Math.floor(price+6.5)
};
