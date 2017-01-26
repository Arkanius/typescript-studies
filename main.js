function getHello(name) {
    return 'Hello ' + name;
}
document.body.innerHTML = getHello('bunda');
var Car = (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.brand, car.name, car.power);
};
var camaro = new Car();
camaro.brand = 'ford';
camaro.age = 'bubble bee';
camaro.power = 45;
