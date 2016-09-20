import { Component } from '@angular/core';
import { Product } from './product'
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import  'rxjs/add/operator/map'; 


@Component({
  selector: 'product-list',
  templateUrl: './app/products/product-list.component.html'
})
export class ProductListComponent {

    private _producttUrl =  'api/products/products.json';

    products : Product[] = []

    constructor(private _http:Http){
        this.getProducts().subscribe(p => this.products = p);
    }

    getProducts() : Observable<Product[]> {
        return this._http.get(this._producttUrl)
                   .map((response: Response) => <Product[]>response.json());
    }


 }
