import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { HttpModule } from '@angular/http'

@NgModule({
  imports:      [ BrowserModule, HttpModule ],

  //Declare Components, NOT SERVICES!!
  declarations: [ AppComponent, ProductListComponent ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }