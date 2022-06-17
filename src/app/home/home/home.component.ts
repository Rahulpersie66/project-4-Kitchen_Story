import { Component, OnInit } from '@angular/core';
import { KitchenProduct } from 'src/app/model/kitchen-product';
import { KitchenUserRegistered} from 'src/app/model/kitchen-user-registered';
import { CartService } from 'src/app/service/cart.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public filterCategory :any;
  searchKey :string="";
  allUser: KitchenUserRegistered[];
  allProduct:KitchenProduct[];
  constructor(private service:ServiceService,private cartService :CartService) { }

  ngOnInit(): void {
    this.getAllProduct();
   
    //here that searc func defined
    this.cartService.search.subscribe(val=>{this.searchKey=val;})
  }

  search(event:any){}
  private getAll(){
    this.service.getAllUser().subscribe(
      data=>{this.allUser=data},
    error=>console.log(error));
   
    
  }

  //indide this add to cart QTy and total is added
  private getAllProduct(){
    this.service.getAllProduct()
    .subscribe(data=>{
      this.allProduct=data;
      this.filterCategory=data;
      //set type  of product here if not set
      this.allProduct.forEach((a:any)=>{
       Object.assign(a,{quantity:1,total:a.price});
       
    });
  })
  }

  //this add to cart items
  addToCart(item:any){
       this.cartService.addToCart(item);
  }


  //to check if type is == "veg"
  filter(type:string){
    this.filterCategory=this.allProduct.filter((a:any)=>{
      if(a.type===type || type=='')
        return a;

    });
  }
 
}
