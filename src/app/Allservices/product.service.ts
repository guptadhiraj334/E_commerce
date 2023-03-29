import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../folder/data-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(`http://localhost:3000/products`);
  }

  addpProducts(body:products){
   return this.http.post(`http://localhost:3000/products`,body)
  }

  limitProduct(){
    return this.http.get(` http://localhost:3000/products?_limit=3`)
  }
}
