import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/classes/order';
import { OrderCardComponent } from 'src/app/components/order-card/order-card.component';
import { OrdersService } from 'src/app/services/orders.service';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/classes/customer';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.page.html',
  styleUrls: ['./delivery-list.page.scss'],
})
export class DeliveryListPage implements OnInit {
  lat: number;
  long: number;
  orders: Order[] = [];
  customer: Customer;

  constructor(private orderService: OrdersService,
    private customerService: CustomersService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    });

    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
    // this.customerService.getCustomers().subscribe(customer => {
    //   this.customer = customer;
    // })

  }


}
