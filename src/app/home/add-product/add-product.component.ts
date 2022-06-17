import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KitchenProduct } from 'src/app/model/kitchen-product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:KitchenProduct =new KitchenProduct();
  current:any;
  constructor(private service:ServiceService, private route:Router) { }

  ngOnInit(): void {

  }

  //image

  onSubmit(){
    this.savePeoduct();
    console.log(this.product);
  }
  savePeoduct(){
    this.service.addProduct(this.product).subscribe(data=>{console.log(data);this.goToBack()},error=>console.log(error));
  }

  goToBack(){
    this.route.navigate(['/adminViewUpdateProduct']);
  }
}
