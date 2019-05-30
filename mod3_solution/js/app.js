(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('API_BASE', 'https://davids-restaurant.herokuapp.com')
.directive('foundItems', foundItemsDirective)

function foundItemsDirective () {
    let ddo = {
        templateUrl: 'menu_Items.html',
        scope: {
            items: '<',
            onRemove: '&',
        },
        controller: foundItemsDirectiveController,
        controllerAs: 'item',
        bindToController: true
    };

    return ddo;
}

function foundItemsDirectiveController () {
    let item = this;
}


NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController (MenuSearchService) {
    let itemMain = this;
    
    // The whole menu
    MenuSearchService.getMatchedMenuItems();
    itemMain.menu = MenuSearchService.getMenu();
        
    // ri = Remove Item
    itemMain.ri = (item) => {
        MenuSearchService.removeItem(item);
    }
    
    // fi = Found Item
    itemMain.fi = (term) => {
        if (term) {
            MenuSearchService.getMatchedMenuItems(term);
            itemMain.menu = MenuSearchService.getFi();
        } 
    }
    
}


MenuSearchService.$inject = ['$http', 'API_BASE'];
function MenuSearchService ($http, API_BASE) {
    let service = this;

    let menuItems = [];

    let foundItems = [];

    
    service.getMatchedMenuItems = (searchT) => {
        
        
        let response = $http(
            {
                method: 'GET',
                url: (API_BASE + '/menu_items.json')
            }
        );

        if (searchT) {
            foundItems = [];
            return response.then(response => {
                let menu = response.data.menu_items;
                
                for (let i=0; i < menu.length; i++) {
                    let found = {name: menu[i].name, sn: menu[i].short_name, dc: menu[i].description };
                    if (found.name.toLowerCase().indexOf(searchT) >= 0) {
                        foundItems.push(found);
                    }
                }
                return foundItems;
            })
            .catch((error)=>{
                return error;        
            });


        } 
        else {

            return response.then(response => {
                let menu = response.data.menu_items;
                for (let i=0; i < menu.length; i++) {
                    let found = {name: menu[i].name, sn: menu[i].short_name, dc: menu[i].description };
                    menuItems.push(found);
                }
                })
                .catch((error)=>{
                        return error;        
                });
            
        } 
        
    }

    
    service.getMenu = () => {
        return menuItems;
    }

    service.getFi = () => {
        return foundItems;
    }


    service.removeItem = (itemIndex) => {
        foundItems.splice(itemIndex, 1);
    };
    
}

})()

