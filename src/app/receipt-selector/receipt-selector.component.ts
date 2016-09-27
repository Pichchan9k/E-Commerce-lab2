
import { Component, OnInit } from '@angular/core';
import { OrderService } from "../order.service"
import { Order } from "../order"

@Component({
  selector: 'app-receipt-selector',
  templateUrl: './receipt-selector.component.html',
  styleUrls: ['./receipt-selector.component.css']
})
export class ReceiptSelectorComponent implements OnInit {

  orders:Array<Order>

  //inject the service instance in constructor
  constructor( os:OrderService  ) {
      this.orders = os.loadData([
  {
    "id": "1474958217923-45",
    "create_time": "2015-12-12T00:00:00.000Z",
    "items": [
      {
        "item": "TestA",
        "quantity": 1,
        "unit_price": 100
      },
      {
        "item": "TestB",
        "quantity": 1,
        "unit_price": 200
      },
      {
        "item": "TestC",
        "quantity": 2,
        "unit_price": 250
      }
    ]
  }])
   }

   //init when done created a component
  ngOnInit() {
  }

}
