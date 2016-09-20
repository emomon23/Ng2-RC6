import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
    templateUrl : 'app/checkout/thankyou.component.template.html'
})
export class ThankYouComponent implements OnInit {
    confirmationCode : string

    constructor(private route: ActivatedRoute){}

    ngOnInit() : void{
        this.route.params.forEach((params) => {
            this.confirmationCode = params['id'];
        });
    }
}