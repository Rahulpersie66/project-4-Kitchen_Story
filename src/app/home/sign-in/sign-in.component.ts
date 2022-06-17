import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KitchenUserRegistered } from 'src/app/model/kitchen-user-registered';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // user={email:'',password:''};
  user= new KitchenUserRegistered();
  lastUser:KitchenUserRegistered;
  allUser:KitchenUserRegistered[];
  constructor(private service : ServiceService, private router: Router) { }


  ngOnInit(): void {
   this.getUser();
  }
  private getUser()
  {
    this.service.getAllUser().subscribe(data=>this.allUser=data);
  }
  private getStringValue(value: any): string {
    return String(value);
  }
  onSubmit(form:any){

    //console.log(form.email);
    for(let u of this.allUser)
    { this.lastUser=this.allUser[this.allUser.length-1];
      
      if(u.email===this.user.email && u.password===this.user.password && u.type==='Admin')
        this.router.navigate(['/home-admin']); //Admin home-2 page create
      else if(u.email===this.user.email && u.password===this.user.password)
        this.router.navigate(['/home']);
        // else if(u.email===this.lastUser.email){
        //   this.router.navigate(['/register']);
        // }
    }
    
  }

}
