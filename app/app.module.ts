import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ],

  //Declare Components, NOT SERVICES!!
  declarations: [ AppComponent ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }