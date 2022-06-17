import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KitchenUserRegistered } from 'src/app/model/kitchen-user-registered';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  userId:number;
  user:KitchenUserRegistered=new KitchenUserRegistered();

  constructor(private service:ServiceService,private activate:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.userId=this.activate.snapshot.params['userId'];
    this.service.getUserById(this.userId).subscribe(data=>this.user=data);
  }

  onSubmit(){
    this.service.updateUser(this.userId,this.user).subscribe(data=>this.goToUserList());
  }

  goToUserList(){
      this.route.navigate(['/allUser']);  
  }
}
