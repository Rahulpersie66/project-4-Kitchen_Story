import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KitchenProduct } from 'src/app/model/kitchen-product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-admin-view-update-product',
  templateUrl: './admin-view-update-product.component.html',
  styleUrls: ['./admin-view-update-product.component.css']
})
export class AdminViewUpdateProductComponent implements OnInit {

  productId:number;
  allProducts:KitchenProduct[];
  constructor(private service:ServiceService,private route: Router) { }

  ngOnInit(): void {

    this.getAllProduct();
  }

  getAllProduct(){
    this.service.getAllProduct().subscribe(data=>this.allProducts=data);
  }

  updateProduct(productId:number){
    this.route.navigate(['/updateProduct',productId]);
  }

  viewProduct(productId:number){
    this.route.navigate(['/viewProduct',productId]);
  }
  
  deleteProduct(productId:number){
    this.service.deleteProduct(productId).subscribe(data=>{console.log(data);this.goToAdminViewPro();});
  }
  goToAdminViewPro(){
    this.route.navigate(['/home-admin']);
  }
}
