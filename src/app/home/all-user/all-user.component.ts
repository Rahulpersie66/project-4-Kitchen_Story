import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KitchenUserRegistered } from 'src/app/model/kitchen-user-registered';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  userId:number;
  allUser:KitchenUserRegistered[];
  constructor(private service:ServiceService,private route:Router) { }

  ngOnInit(): void {
    this.service.getAllUser().subscribe(data=>this.allUser=data);
  }

  viewUser(userId:number){
    this.route.navigate(['/viewUser',userId]);
  }

  updatePassword(userId:number){
    this.route.navigate(['/changePassword',userId]);
  }
  

}
