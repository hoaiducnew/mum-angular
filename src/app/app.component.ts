import { Component } from '@angular/core';
import {Condition, Product} from "./product";

const PRODUCTS: Product[] = [
    {id:1, name:'iPhone', description:'iPhone 8', price:600, condition: Condition.New, category:'phone'},
    {id:2, name:'iPad', description:'iPad Air 2', price:400, condition: Condition.Used, category:'tablet'}
]

@Component({
  selector: 'app-root',
  template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let product of products">
            <span>{{product.id}}</span> - {{product.name}}
        </li>
    </ul>
  `,
  styles: [`
  
  `]
})
export class AppComponent {
  title = 'Products';
  products = PRODUCTS;
  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
