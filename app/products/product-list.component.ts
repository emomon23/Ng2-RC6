import { Component, OnInit } from '@angular/core';
import { Product } from './product'
import { Observable } from 'rxjs/Rx';
import { DataAccessLayerService } from '../dataAccessService/data-access-layer.service'
import { ProductCategories } from '../pipes/products-categories.pipe'
import { StarComponent } from '../sharedComponents/starComponent/star-component'
import { ShoppingCartService } from '../sharedComponents/shoppingCart/shopping-cart-service'

@Component({
    templateUrl: './app/products/product-list.component.html'
})
export class ProductListComponent implements OnInit {

    private  _selectedCateogry: string = 'Home';

    products: Product[];
    filterdProducts: Product[];
    errorMessage: string = '';

    constructor(private _dal:DataAccessLayerService, private _cart: ShoppingCartService){}

    ngOnInit() : void{
            this._dal.getProducts().subscribe(p => this.onProductsRetrieved(p));
    }

    private onProductsRetrieved(products : Product[]): void {
            this.products = products;
            this.filterdProducts = this.products;
    }

    selectCategory(categoryName: any) {  
        this._selectedCateogry = categoryName ? categoryName.toLocaleLowerCase() : null; 

        this.filterdProducts = categoryName ? this.products.filter((product: Product) => 
            categoryName == "Home" ||  product.category.toLocaleLowerCase().indexOf(this._selectedCateogry) !== -1) : this.products;
    }

    onStarsClick(message : string) : void {
        alert(message);
    }

    addToCart(product: Product){
         this._cart.addToCart(product, 1);
    }

}
