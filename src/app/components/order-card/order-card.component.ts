import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/classes/order';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],

})
export class OrderCardComponent implements OnInit {
  @Input() order = {};
  orderService: OrdersService;
  constructor() {

  }

  ngOnInit() {

  }

}
