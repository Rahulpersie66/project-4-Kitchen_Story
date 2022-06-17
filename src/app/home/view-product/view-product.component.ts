import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KitchenProduct } from 'src/app/model/kitchen-product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId:number;
  product:KitchenProduct=new KitchenProduct();
  constructor(private service :ServiceService, private activatedRouter:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
  this.productId=this.activatedRouter.snapshot.params['productId'];

  this.service.getProductByProductId(this.productId).subscribe(data=>this.product=data);
  }

  onSubmit(){
    this.route.navigate(['/adminViewUpdateProduct']);
  }

}
