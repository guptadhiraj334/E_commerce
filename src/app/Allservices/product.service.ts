import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../folder/data-interface';
import baseUrl from '../Helper/Helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<products[]>(`${baseUrl}/products`);
  }

  addpProducts(body:products){
   return this.http.post(`${baseUrl}/products`,body)
  }

  limitProduct(){
    return this.http.get(` ${baseUrl}/products?_limit=3`)
  }

  deleteProduct(id){
    return this.http.delete(`${baseUrl}/products/`+id)
  }

  getProductById(id:string){
    return this.http.get<products[]>(`${baseUrl}/products/${id}`)
  }

  updateProduct(product:any,id:any){
    return this.http.put(`http://localhost:3000/products/${id}`,product)
  }

  searchProduct(query:string){
    return this.http.get<products>(`http://localhost:3000/products?q=${query}`)
  }
}
