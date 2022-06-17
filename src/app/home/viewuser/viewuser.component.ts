import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KitchenUserRegistered } from 'src/app/model/kitchen-user-registered';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  userId:number;
  user:KitchenUserRegistered=new KitchenUserRegistered();
  constructor(private service:ServiceService,private activate:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.userId=this.activate.snapshot.params['userId'];
    this.service.getUserById(this.userId).subscribe(data=>this.user=data);
  }

  onSubmit(){
    this.route.navigate(['/allUser']);
  }
}
