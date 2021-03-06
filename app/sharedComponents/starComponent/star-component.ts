import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core'
 
 @Component({
    selector: 'starRating',
    templateUrl : '../app/sharedComponents/starComponent/star-component.html',
    styleUrls: ['../app/sharedComponents/starComponent/star-component.css']
 })
 export class StarComponent  implements OnChanges {
     @Input() rating: number;
     @Output() notify: EventEmitter<string> = new EventEmitter<string>();
     starWidth: number;
 
     ngOnChanges() : void {
        this.starWidth = this.rating * 86 / 5;
     }
 
     onClick() : void {
         if (this.notify){
            this.notify.emit(`Current product rating: ${this.rating}`);
         }        
     }
 } 