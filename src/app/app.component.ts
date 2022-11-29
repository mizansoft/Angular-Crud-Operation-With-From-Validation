import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myService: ProductsService) {
    this.pArray = this.myService.getStudents();
  }


  title = 'product-new-id-insert-update-delete-with-service';

  pid: number = 0;
  pname: string = "";
  pstock: number = 0;
  pprice: number = 0;
  pdiscount: number = 0;

  pArray: Product[];
  message: string = "";

  green = "green";
  red = "red";

  addProduct() {
    let f = this.pArray.find(data => data.pId == this.pid);
    if (f == null && this.pid > 0) {
      this.pArray?.push(new Product(this.pid, this.pname, this.pprice, this.pstock, this.pdiscount));
      this.message = "Item added successfuly ";
    } else {
      this.message = "Item id empty or item already exit ";
    }

  }


  deleteProduct(id: number) {
    for (let i = 0; i < this.pArray.length; i++) {
      if (id == this.pArray[i].pId) {
        this.pArray.splice(i, 1)
        this.message = "Item deleted ";
      }
    }
  }



  updateProduct(id: number) {
    for (let i = 0; i < this.pArray.length; i++) {
      if (id == this.pArray[i].pId) {
        this.pArray[i].pName = this.pname;
        this.pArray[i].pStock = this.pstock;
        this.pArray[i].pPrice = this.pprice;
        this.pArray[i].pDiscount = this.pdiscount;
        this.message = "Item updated ";
      }
    }
  }


}
