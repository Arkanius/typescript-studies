var App;
(function (App) {
    var Car = (function () {
        function Car() {
        }
        return Car;
    }());
    App.Car = Car;
})(App || (App = {}));
var a = new App.Car();
console.log(a);
