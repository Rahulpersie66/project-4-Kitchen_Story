import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

import { AddProductComponent } from './home/add-product/add-product.component';
import { AdminViewUpdateProductComponent } from './home/admin-view-update-product/admin-view-update-product.component';
import { AllUserComponent } from './home/all-user/all-user.component';
import { ChangePasswordComponent } from './home/change-password/change-password.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { OrderConfirmationComponent } from './home/order-confirmation/order-confirmation.component';
import { PayoutComponent } from './home/payout/payout.component';
import { RegisterComponent } from './home/register/register.component';
import { ShopCartComponent } from './home/shop-cart/shop-cart.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { UpdateProductComponent } from './home/update-product/update-product.component';
import { ViewProductComponent } from './home/view-product/view-product.component';
import { ViewuserComponent } from './home/viewuser/viewuser.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"signIn",component:SignInComponent},
  {path:"register",component:RegisterComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"home-admin",component:HomeAdminComponent},
  {path:"adminViewUpdateProduct", component:AdminViewUpdateProductComponent},
  {path:"updateProduct/:productId",component:UpdateProductComponent},
  {path:"viewProduct/:productId",component:ViewProductComponent},
  {path:"cart",component:ShopCartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"changePassword/:userId",component:ChangePasswordComponent},
  {path:"allUser",component:AllUserComponent},
  {path:"viewUser/:userId",component:ViewuserComponent},
  {path:"payout/:orderId",component:PayoutComponent},
  {path:"orderConfirmation",component:OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
