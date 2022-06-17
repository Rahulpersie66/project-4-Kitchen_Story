import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KitchenOrderBooked } from '../model/kitchen-order-booked';
import { KitchenProduct } from '../model/kitchen-product';
import { KitchenUserRegistered } from '../model/kitchen-user-registered';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url= 'http://localhost:8080';
  
  constructor(private httpClient:HttpClient) { }

  getAllUser():Observable<KitchenUserRegistered[]>{
    return this.httpClient.get<KitchenUserRegistered[]>(`${this.url}/admin/showAllUser`);
  }

  getAllProduct():Observable<KitchenProduct[]>{
    return this.httpClient.get<KitchenProduct[]>(`${this.url}/admin/showProducts`);
  }

  addUser(user:KitchenUserRegistered) :Observable<Object>{
    return this.httpClient.post(`${this.url}/admin/addedSignUpUser`,user,{responseType:'text'});
  }

  addProduct(product:KitchenProduct):Observable<Object>{
    return this.httpClient.post(`${this.url}/admin/addProductDetails`,product);
  }

  getProductByProductId(productId:number):Observable<KitchenProduct>{
    return this.httpClient.get<KitchenProduct>(`${this.url}/admin/product/${productId}`);
  }

  getUserById(userId:number):Observable<KitchenUserRegistered>{
    return this.httpClient.get<KitchenUserRegistered>(`${this.url}/admin/changePassword/${userId}`);
  }

  getOrderById(orderId:number):Observable<KitchenOrderBooked>{
    return this.httpClient.get<KitchenOrderBooked>(`${this.url}/checkout/${orderId}`);
  }

  updateProduct(productId:number,product:KitchenProduct):Observable<KitchenProduct>{
    return this.httpClient.put<KitchenProduct>(`${this.url}/admin/upadte/${productId}`,product);
  }

  updateUser(userId:number,user:KitchenUserRegistered):Observable<KitchenUserRegistered>{
    return this.httpClient.put<KitchenUserRegistered>(`${this.url}/admin/updatePassword/${userId}`,user);
  }

  updateOrderById(orderId:number,order:KitchenOrderBooked):Observable<KitchenOrderBooked>{
    return this.httpClient.put<KitchenOrderBooked>(`${this.url}/checkout/${orderId}`,order);
  }

  deleteProduct(productId:number):Observable<Object>{
    return this.httpClient.delete(`${this.url}/admin/deleteProduct/${productId}`,{responseType:'text'});
  }

  addOrderBooked(order : KitchenOrderBooked):Observable<Object>{
    return this.httpClient.post(`${this.url}/checkout/orderBooked`,order);
  }

  getAllOrder():Observable<KitchenOrderBooked[]>{
    return this.httpClient.get<KitchenOrderBooked[]>(`${this.url}/allOrder`);
  }

}
