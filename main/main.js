module.exports = function main(inputs) {
    price = 6;
    if (10 - inputs.distance < 8) {
        price += (inputs.distance-2)*0.8
    }
    price += inputs.parkTime*0.25
    return Math.floor(price+0.5)
};
