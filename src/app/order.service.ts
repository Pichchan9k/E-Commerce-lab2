import { Injectable } from '@angular/core';
import { Order } from "./order"
import { OrderItem } from "./order-item"

@Injectable()
export class OrderService {

  constructor() { }

  getAllOrder():Array<Order>{
    return []
  }

  getOrder(id:number):Order{
    return null;
  }


}
