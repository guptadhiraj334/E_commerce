import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { SignUp,Login } from '../folder/data-interface';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  SellerPost(body:SignUp){
  return this.http.post(`http://localhost:3000/seller`,body);
  }

  SellerLogin(body:Login){
    return this.http.post(`http://localhost:3000/Login`,body)
  }

  setToken(seller:string){
    localStorage.setItem('seller details',JSON.stringify(seller));
  }

  getToken(){
    return JSON.parse(localStorage.getItem('seller'));
  }

  loginSetLocalSrorage(seller){
    localStorage.setItem('seller pwd & email',JSON.stringify(seller));
  }

  loginGetLocalStorage(){
    return JSON.parse(localStorage.getItem('seller'));
  }
}
