libraryApp.service('cartService',function(){
    return{
      addToCart:function(cartItems,book){
        var isBookThere = false;
        console.log("Adding item.." + book.name);
        book.copies--;

        if(!cartItems.length){
            cartItems.push({name:book.name,copies:1});
        }else{
            cartItems.forEach(function(element,i) {
                if(book.name == element.name){
                    element.copies++;
                    isBookThere = true;
                }  
            });

            if(!isBookThere){
                cartItems.push({name:book.name,copies:1});
            }
        }    
      },

      removeFromCart : function(cartItems,book,index){
                book.copies--;
        
                if(book.copies == 0){
                   cartItems.splice(index,1);
                }
      },

      checkOut : function(cartItems){
            alert("Thanks for checking out!!");
      },

      refreshInventory: function(books,event,returnedBook){
        books.forEach(function(element){
            if(element.name == returnedBook.name){
                element.copies++;
            }
        });
      }
    };
});