import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KitchenOrderBooked } from 'src/app/model/kitchen-order-booked';
import { CartService } from 'src/app/service/cart.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutComponent implements OnInit {
  orderId:number=133;
  proComp:string;
  product:any;
  productOrdered:string;
  allOrder:KitchenOrderBooked[];
  order:KitchenOrderBooked=new KitchenOrderBooked();
  constructor(private route:Router,private cartService:CartService,private service:ServiceService,private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId=this.activate.snapshot.params['orderId'];
    this.service.getOrderById(this.orderId).subscribe(data=>this.order=data);
    this.service.getAllOrder().subscribe(data=>this.allOrder=data);

  }

  onSubmit(){
    
  
    this.service.updateOrderById(this.orderId,this.order).subscribe(data=>{this.order=data; console.log(this.order)});
    this.route.navigate(['/orderConfirmation']);
  }

}
