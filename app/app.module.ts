import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { ProductCategories } from './pipes/products-categories.pipe';
import { HttpModule } from '@angular/http'
import { StarComponent } from './sharedComponents/starComponent/star-component'
import { CartGuiComponent } from './sharedComponents/shoppingCart/shopping-cart-service'
import { CheckOutComponent } from './checkout/checkout.components';
import { ShipToComponent} from './checkout/ship-to.component'
import { ThankYouComponent } from './checkout/thankyou.component'

import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, FormsModule ],

  //Declare Components, NOT SERVICES!!
  declarations: [ AppComponent, ProductListComponent,
                  ProductCategories, StarComponent, CartGuiComponent,
                  CheckOutComponent, ShipToComponent, ThankYouComponent ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }