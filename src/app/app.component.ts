import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CartService } from './service/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KitchenStoryFrontend';
  public totalItem : number;
  public searchTerm:string='';

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem=res.length;
    });

  }

  search(event:any){
    
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
