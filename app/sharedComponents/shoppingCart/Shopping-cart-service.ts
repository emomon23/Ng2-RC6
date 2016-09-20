import { Injectable, Component} from '@angular/core';
import { Product} from '../../Products/Product';
import { CartItem } from './CartItem';

@Injectable()
export class ShoppingCartService {
    items: Array<CartItem> = new Array<CartItem>();
    totalQuantityInCart: number = 0;
    totalCartPrice: number = 0;

    addToCart(product: Product, quantity: number) :void {
       var existingCartItem = this.findProduct(product.productId);
  
       if (existingCartItem == null)
        {
          var cartItem : CartItem = new CartItem(product.productId, product.name, product.description, product.price, quantity);
          this.items.push(cartItem);
         
       }
       else {
           existingCartItem.quantity+=quantity;
        }
        
        this.totalQuantityInCart+=quantity;
        this.totalCartPrice+= product.price * quantity; 
    }

     
     removeFromCart(itemId: number) : void {
           var existingCartItem = this.findProduct(itemId);
 
           if (existingCartItem != null){
               this.totalCartPrice-= existingCartItem.price * existingCartItem.quantity;
               this.totalQuantityInCart-= existingCartItem.quantity;
               var index = this.items.indexOf(existingCartItem);
               this.items.splice(index, 1);
           }
     }
 
     
     private findProduct(itemId: number) : CartItem {
         var result : CartItem = null;
 
          for (var i:number=0; i < this.items.length; i++){
           if (this.items[i].itemId == itemId){
               result = this.items[i];
               break;
           }
         }
         
         return result;
     }
 }



 @Component({
    selector: 'shopping-cart',
    templateUrl:  '../app/sharedComponents/shoppingCart/cart-gui-component.html',

})
export class CartGuiComponent {
   cart: ShoppingCartService;

   constructor(cart: ShoppingCartService){
       this.cart = cart;
   }
}