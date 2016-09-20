import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { CheckOutComponent } from './checkout/checkout.components'
import { ShipToComponent} from './checkout/ship-to.component'
import {ThankYouComponent} from './checkout/thankyou.component'

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: '',
    component: ProductListComponent,
  }, 
  {
    path: 'checkout',
    component: CheckOutComponent
  },
  {
      path:'placeOrder',
      component: ShipToComponent
  },
  {
      path:'thankYou/:id',
      component: ThankYouComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
