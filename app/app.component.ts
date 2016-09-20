import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component'
import { DataAccessLayerService } from './dataAccessService/data-access-layer.service'
import { ShoppingCartService } from './sharedComponents/shoppingCart/shopping-cart-service'

@Component({
  selector: 'root-component',
  template: '<router-outlet></router-outlet>',
  providers: [DataAccessLayerService, ShoppingCartService]
})
export class AppComponent { }
