import { Component, OnInit } from '@angular/core';
import { OrderCardComponent } from 'src/app/components/order-card/order-card.component';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.page.html',
  styleUrls: ['./delivery-list.page.scss'],
})
export class DeliveryListPage implements OnInit {
  lat: number;
  long: number;

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    });

    component: OrderCardComponent
  }



}
