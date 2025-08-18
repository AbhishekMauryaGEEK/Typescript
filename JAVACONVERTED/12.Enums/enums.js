"use strict";
var icecream;
(function (icecream) {
    icecream["vanella"] = "vanella";
    icecream["chocklate"] = "chocklate";
    icecream["strawberry"] = "sda";
    icecream["darkforest"] = "sdag";
})(icecream || (icecream = {}));
console.log(icecream.darkforest);
console.log(` i am eating ${icecream.chocklate}`);
