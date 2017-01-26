
function getHello(name:string)
{
    return 'Hello ' + name;
}

document.body.innerHTML = getHello('bunda');

interface iCar
{
    brand:string;
    name:string;
    power:string;
}

class Car
{
    brand:string;
    name:string;
    power:number;
}

var getCar = function(car:iCar) {
    console.log(car.brand, car.name, car.power);
};

var camaro = new Car();

camaro.brand = 'ford';
camaro.name = 'bubble bee';
camaro.power = 45;
