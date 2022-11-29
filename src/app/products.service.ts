import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getStudents(): Product[] {
    return [
      new Product(100, "guyava", 100,50,22),
      new Product(101, "potato", 60,20,6),
      new Product(102, "coconat", 600,60,30),
      new Product(103, "potato", 96,30,80),
      new Product(104, "banana", 41,90,55)
    ]
  }

}
