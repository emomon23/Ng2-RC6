import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component'
import { DataAccessLayerService } from './dataAccessService/data-access-layer.service'

@Component({
  selector: 'root-component',
  template: `<product-list></product-list>`,
  providers: [DataAccessLayerService]
})
export class AppComponent { }
