import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '../products/product';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import  'rxjs/add/operator/map'; 

@Injectable()
export class DataAccessLayerService {
   private _getProductstUrl =  'api/products/products.json';

   constructor(private _http: Http){}

   getProducts() : Observable<Product[]> {
      return this._http.get(this._getProductstUrl)
             .map((response: Response) => <Product[]>response.json());
   }
}