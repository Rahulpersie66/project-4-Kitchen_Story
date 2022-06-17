import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KitchenProduct } from 'src/app/model/kitchen-product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId:number;
  product: KitchenProduct=new KitchenProduct();
  constructor(private service:ServiceService,private activateRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.productId=this.activateRoute.snapshot.params['productId'];
    this.service.getProductByProductId(this.productId).subscribe(data=>this.product=data);
  }
  onSubmit(){
    this.service.updateProduct(this.productId,this.product).subscribe(data=>this.goToProductList());
  }

  goToProductList(){
      this.route.navigate(['/adminViewUpdateProduct']);  
  }
}
