///<reference path="src/Product.ts"/>
var App;
(function (App) {
    var p = new App.Product('book', 'bunda');
    console.log(p);
})(App || (App = {}));
