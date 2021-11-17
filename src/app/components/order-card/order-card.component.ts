import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/classes/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],

})
export class OrderCardComponent implements OnInit {
  @Input() order: Order;
  orderService: OrdersService;
  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  displayCustomerDetails() {
    this.router.navigate(['/execute-order', { order: this.order }])

  }

}
