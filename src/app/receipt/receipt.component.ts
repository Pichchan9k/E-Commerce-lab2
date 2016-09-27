import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from "../order.service"

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  order
  constructor(od:OrderService) {
    this.order = od.getAllOrder()[0]

   }

  ngOnInit() {
  }

}
