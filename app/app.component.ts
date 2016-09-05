import { Component } from '@angular/core';
@Component({
  selector: 'app-component',
  template: `<div class='navbar navbar-inverse'>
        <h1>
	        <a class='nav-brand' href='#'>Sportz Ur Way</a>
         </h1>
    </div>

    <div class="panel panel-default row">
        <div class="col-xs-3">
            <a class='btn btn-primary btn-block btn-default btn-lg'>Home</a>
        </div>
        <div class="col-xs-8">
            <div class="well">
                <h3>
                    <strong>Product Name</strong>
                    <span class="pull-right label label-primary">
                       $100.95
                    </span>
                </h3>
                <span class="lead">The best product EVER!</span>
            </div>
        </div>
    </div>`
})
export class AppComponent { }
