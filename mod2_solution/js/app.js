(function () {
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService']

// To Buy List Controller - List 1
function ToBuyController (ShoppingListCheckOffService) {
    let toBuys = this;
    
    toBuys.showToBuy =  ShoppingListCheckOffService.showItem();

    toBuys.remove = (item) => {
        ShoppingListCheckOffService.removeItem(item)
    };
    // 
    console.log(toBuys.showToBuy);
}

// To Buy List Controller - List 2
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController (ShoppingListCheckOffService) {
    let bought = this;
    
    bought.showBought = ShoppingListCheckOffService.showItemBought();
    console.log(bought.showBought);
}

// Service
function ShoppingListCheckOffService () {
    let service = this;

    let toBuy = [
        {
            name: 'pack(s) of Milk',
            quantity: 10
        },
        {
            name: 'eggs',
            quantity: 5
        },
        {
            name: 'bread(s)',
            quantity: 6
        },
        {
            name: 'bottle(s) of Tomate Sauce',
            quantity: 4
        },
        {
            name: 'Roll(s) of Meat Steak',
            quantity: 12
        }
    ];

    let bought = [];
    

    service.showItem = () => {
        return toBuy;
    }
    
    service.removeItem = (itemIndex) => {
        let r =  toBuy.splice(itemIndex, 1);
        return bought.push(r);
    };

    service.showItemBought = () => {
        return bought;
    }
}

})()