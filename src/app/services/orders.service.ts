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
    return this.http.get<Order[]>(`https://localhost:44339/Api/Customers`);
  }
}
