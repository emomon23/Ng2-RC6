export class CartItem {
     itemId: number;
     name: string;
     description: string;
     price: number;
     quantity: number;
 
     constructor (id:number, name:string, description: string, price: number, quantity:number){
         this.itemId = id;
         this.name = name;
         this.description = description;
         this.price = price;
         this.quantity = quantity
     }
 }