import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-in-process',
  templateUrl: './order-in-process.component.html',
  styleUrls: ['./order-in-process.component.scss'],
})
export class OrderInProcessComponent implements OnInit {
  @Input() order = {};
  orderService: OrdersService;
  constructor() { }

  ngOnInit() { }

}
