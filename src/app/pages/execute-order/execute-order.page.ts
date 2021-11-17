import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/classes/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-execute-order',
  templateUrl: './execute-order.page.html',
  styleUrls: ['./execute-order.page.scss'],
})
export class ExecuteOrderPage implements OnInit {

  orders: Order[] = [];
  constructor(private route: ActivatedRoute, private orderService: OrdersService) { }
  orderId: number;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
    });

    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }
}