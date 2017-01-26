///<reference path="IProduct.ts"/>
var App;
(function (App) {
    var Product = (function () {
        function Product(name, description) {
            this.name = name;
            this.description = description;
        }
        ;
        return Product;
    }());
    App.Product = Product;
})(App || (App = {}));
