import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormsModule } from  '@angular/forms'
import { ShoppingCartService, CartItem} from '../sharedComponents/shoppingCart/shopping-cart-service';
import { DataAccessLayerService } from '../dataAccessService/data-access-layer.service';

export class Order {
    shipToName: string;
    shipToAddress: string;
    shipToCity: string;
    shipToState: string;
    shipToZip: string;
    shipToCountry: string;
    giftWrap: boolean;
}


@Component({
    templateUrl: 'app/checkout/shipping.component.template.html',
 })
 export class ShipToComponent {
     order: Order;

     constructor(private _cart: ShoppingCartService, private _dal: DataAccessLayerService, private _router: Router){
         this.order = new Order();
     }

     submitOrder():void {
         // this._dal.submitOrder(this._cart.items, this.order);
         var confCode: string = "CF63232";
         this._router.navigate(['/thankYou', confCode]);
     }
 }