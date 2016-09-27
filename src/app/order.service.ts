import { Injectable } from '@angular/core';
import { Order } from "./order"
import { OrderItem } from "./order-item"


@Injectable()
export class OrderService {

  constructor() { }


  getAllOrder():Array<Order>{
    let orders = [
      new Order([
        new OrderItem('TestA', 1, 100),
        new OrderItem('TestB', 1, 200),
        new OrderItem('TestC', 2, 250),
      ], new Date("2015-12-12")),
      new Order([
        new OrderItem('TestD', 1, 100),
        new OrderItem('TestE', 1, 200),
        new OrderItem('TestF', 2, 250),
      ])
    ]
    return orders;
  }

  getOrder(id:number){
    let all_order = this.getAllOrder();
    for(let i=0; i < all_order.length; i++)
      if(all_order[i].id == id)
        return all_order[i]
    return null;
  }


}
