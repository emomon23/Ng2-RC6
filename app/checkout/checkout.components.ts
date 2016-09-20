import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormsModule } from  '@angular/forms'
import { ShoppingCartService, CartItem} from '../sharedComponents/shoppingCart/shopping-cart-service';
import { DataAccessLayerService } from '../dataAccessService/data-access-layer.service';


 //******************** CheckOutComponent **************************************
 @Component({
    templateUrl: 'app/checkout/checkout.component.template.html',
 })
 export class CheckOutComponent {
     cartItems : CartItem[];
 
     constructor(private _cart: ShoppingCartService){
         this.cartItems = _cart.items;
     }
    
     cartIsEmpty() : boolean {
         return this._cart.items.length == 0;
     }
 
     removeFromCart(item: CartItem){
         this._cart.removeFromCart(item.itemId);
     }
 
     totalCartPrice() : number {
         return this._cart.totalCartPrice;
     }
 } 

 
