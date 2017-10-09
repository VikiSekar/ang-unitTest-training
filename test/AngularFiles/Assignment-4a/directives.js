
libraryApp.directive('books',function(){
    return {
        templateUrl: "booksDirective.html"
    };
});

libraryApp.directive('cart',function(){
    return {
        templateUrl: "cartDirective.html",
        restrict: "EA"
    };
});