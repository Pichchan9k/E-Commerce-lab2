import { Injectable } from '@angular/core';
import { Order } from "./order"
import { OrderItem } from "./order-item"



const ORDERS = [
      new Order([
        new OrderItem('TestA', 1, 100),
        new OrderItem('TestB', 1, 200),
        new OrderItem('TestC', 2, 250),
      ], new Date("2015-12-12")),
      new Order([
        new OrderItem('TestD', 1, 100),
        new OrderItem('TestE', 5, 203),
        new OrderItem('TestF', 2, 250),
      ]),
      new Order([
        new OrderItem('TestK', 1, 100),
        new OrderItem('TestI', 3, 200),
        new OrderItem('TestN', 2, 250),
      ])
      ,
      new Order([
        new OrderItem('DD', 1, 100),
        new OrderItem('EE', 1, 300),
        new OrderItem('FF', 2, 250),
      ])
    ]

@Injectable()
export class OrderService {
   
  constructor() { }

 

  getAllOrder(): Array<Order>{
    
    return ORDERS;
  }

  getOrder(id:string){
    console.log('find: ' + id)
    return this.getAllOrder().find( item =>{
      
      return item.id == id;
    })
  }


}
