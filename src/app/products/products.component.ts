import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from '../product/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(private http: HttpClient) { }
  ngOnInit() {
      this.products = this.http.get<Product[]>("./assets/products.json");
  }
}


