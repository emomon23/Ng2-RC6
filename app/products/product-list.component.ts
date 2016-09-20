import { Component } from '@angular/core';
import { Product } from './product'
import { Observable } from 'rxjs/Rx';
import { DataAccessLayerService } from '../dataAccessService/data-access-layer.service'

@Component({
  selector: 'product-list',
  templateUrl: './app/products/product-list.component.html'
})
export class ProductListComponent {

     products : Product[] = []

    constructor(private _dal:DataAccessLayerService){
        this._dal.getProducts().subscribe(p => this.products = p);
    }


 }
