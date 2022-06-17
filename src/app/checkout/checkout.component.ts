import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KitchenOrderBooked } from '../model/kitchen-order-booked';
import { CartService } from '../service/cart.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public orderId:number=133;
  public order:KitchenOrderBooked=new KitchenOrderBooked();
  public product:any=[];
  public grandTotal :number;
  public cgstGrand:number;
  public allItem:string;
  proComp:string;
  allOrder:KitchenOrderBooked[];
  constructor(private cartService:CartService,private service:ServiceService,private route:Router) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
      this.allItem=this.cartService.getAllItem();
      this.cgstGrand=this.grandTotal*0.14+this.grandTotal;
      this.order.total=this.cgstGrand;
      this.order.productOrdered=this.allItem;
      
      
    })

    this.service.getAllOrder().subscribe(data=>this.allOrder=data);    
   
    
  }

  onSubmit(){
    console.log(this.order);
    this.saveOrderData();

      for(let pro of this.allOrder)
    { 
      // console.log(this.proComp);
        if(pro.total==this.cgstGrand)
          {
            this.orderId=pro.orderId;
            break;
          }
        
    }
    this.route.navigate(['/payout',this.orderId]);
  }

  saveOrderData(){
    this.service.addOrderBooked(this.order).subscribe(data=>{
      console.log(this.order.orderId);
    });
  }


}
