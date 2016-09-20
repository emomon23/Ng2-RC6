import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { ProductCategories } from './pipes/products-categories.pipe';
import { HttpModule } from '@angular/http'
import { StarComponent } from './sharedComponents/starComponent/star-component'

@NgModule({
  imports:      [ BrowserModule, HttpModule ],

  //Declare Components, NOT SERVICES!!
  declarations: [ AppComponent, ProductListComponent,
                  ProductCategories, StarComponent ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }