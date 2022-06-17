import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './home/register/register.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AddProductComponent } from './home/add-product/add-product.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';
import { AdminViewUpdateProductComponent } from './home/admin-view-update-product/admin-view-update-product.component';
import { UpdateProductComponent } from './home/update-product/update-product.component';
import { ViewProductComponent } from './home/view-product/view-product.component';
import { ShopCartComponent } from './home/shop-cart/shop-cart.component';
import { PipePipe } from './search/pipe.pipe';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChangePasswordComponent } from './home/change-password/change-password.component';
import { AllUserComponent } from './home/all-user/all-user.component';
import { ViewuserComponent } from './home/viewuser/viewuser.component';
import { PayoutComponent } from './home/payout/payout.component';
import { OrderConfirmationComponent } from './home/order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignInComponent,
    RegisterComponent,
    AddProductComponent,
    HomeAdminComponent,
    AdminViewUpdateProductComponent,
    UpdateProductComponent,
    ViewProductComponent,
    ShopCartComponent,
    PipePipe,
    CheckoutComponent,
    ChangePasswordComponent,
    AllUserComponent,
    ViewuserComponent,
    PayoutComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
