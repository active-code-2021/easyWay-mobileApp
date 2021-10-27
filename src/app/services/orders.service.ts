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
    let currentDeliveryMan = "61797191c3641f3910e81870";
    return this.http.get<Order[]>(`https://localhost:44339/Api/Order/GetOrderByDeliveryMan/` + currentDeliveryMan);
  }
}
