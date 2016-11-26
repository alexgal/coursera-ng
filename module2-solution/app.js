(function () {
    'use strict'
    angular.module("ShoppingListCheckOff", [])
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController);

    /* Controllers */
    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController ($scope, shoppingListService) {
        this.toBuyList = shoppingListService.getToBuyList();

        this.buyItem = function(index) {
            shoppingListService.buyItem(index)
        }
    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController ($scope, shoppingListService) {
        this.boughtList = shoppingListService.getBoughtList();
    }

    /* Service */
    function ShoppingListCheckOffService() {
        var toBuy = [
            {name: "cookies", quantity: 10},
            {name: "apples", quantity: 5},
            {name: "oranges", quantity: 6},
            {name: "nuts", quantity: 30},
            {name: "fish", quantity: 1},
            {name: "chips", quantity: 3}
        ];
        var bought = [];
        return {
            getBoughtList : function() {
                return bought;
            },
            getToBuyList : function() {
                return toBuy;
            },
            buyItem : function (index) {
                var item = toBuy.splice(index,1);
                bought.push(item[0]);
            }
        }
    }
})();