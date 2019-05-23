module.exports = function main(inputs) {
    price = 6;
    if (8 - inputs.distance < 6) {
        price += (inputs.distance-2)*0.8
    }
    if (8 - inputs.distance < 0) {
        price += (inputs.distance-8)*0.4
    }
    price += inputs.parkTime*0.25
    return Math.floor(price+0.5)
};
