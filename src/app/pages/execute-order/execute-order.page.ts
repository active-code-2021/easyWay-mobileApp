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
  orderId: string;
  order: Order;
  constructor(private orderService: OrdersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.orderId = params['orderId'];
      this.orderService.getOrderById(this.orderId).subscribe(order => {
        this.order = order;
      });
    });


  }
}