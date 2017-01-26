module App{
    interface ICar
    {
        name:string;
    }
    export class Car implements  ICar
    {
        name:string;
    }
}

var a = new App.Car();
console.log(a);