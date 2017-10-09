
libraryApp.controller('mainCtrl',['$scope','cartService',function($scope,cartService){
    $scope.categories = [{name:'Technical Books',isSelected:false,controller:techCtrl},
    {name:'Non-Technical Books',isSelected:false,controller:nonTechCtrl}];

    $scope.cartItems = [];

    $scope.addToCart = function(book){
        cartService.addToCart($scope.cartItems,book);
    };
    
    $scope.removeFromCart = function(book,$index){
        cartService.removeFromCart($scope.cartItems,book,$index);
        
        $scope.$broadcast('book-returned',book);
    };

    $scope.checkOut = function(){
        $scope.cartItems = [];
        cartService.checkOut($scope.cartItems);
    };
        
}]);

function techCtrl($scope,cartService){
   $scope.books = [{name:"Introduction to C",copies:4},
                    {name:"AngularJS by Misko Hevery", copies:1},
                    {name:"Introduction to Node.JS",copies:0}];
    
    $scope.$on('book-returned',function(event,returnedBook){
        cartService.refreshInventory($scope.books,event,returnedBook);
    });
}

function nonTechCtrl($scope,cartService){
    $scope.books = [{name:"Wings of Fire - Dr.APJ Abdul Kalam",copies:4},
                    {name:"A hundred hundreds - Sachin", copies:1},
                    {name:"Spirit Of Music - ARR",copies:5}];
    
    $scope.$on('book-returned',function(event,returnedBook){
        cartService.refreshInventory($scope.books,event,returnedBook);
    });
}

