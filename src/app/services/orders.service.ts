import { Injectable } from '@angular/core';
import { Order } from '../classes/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) { }
  getOrders(): Observable<Order[]> {
    let currentDeliveryMan = "618bf63a7ceb0f511d97a9b0";
    // https://localhost:44339/Api/Order/GetOrderByDeliveryMan
    return this.http.get<Order[]>(`https://localhost:44339/api/Order/deliveryMan/` + currentDeliveryMan) as Observable<Order[]>;
  }
}
