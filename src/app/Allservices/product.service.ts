import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../folder/data-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<products[]>(`http://localhost:3000/products`);
  }

  addpProducts(body:products){
   return this.http.post(`http://localhost:3000/products`,body)
  }

  limitProduct(){
    return this.http.get(` http://localhost:3000/products?_limit=3`)
  }

  deleteProduct(id){
    return this.http.delete(`http://localhost:3000/products/`+id)
  }

  getProductById(id:string){
    return this.http.get<products[]>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(product:any,id:any){
    return this.http.put(`http://localhost:3000/products/${id}`,product)
  }

  searchProduct(query:string){
    return this.http.get<products>(`http://localhost:3000/products?q=${query}`)
  }
}
