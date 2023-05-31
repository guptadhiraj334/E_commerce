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

  SellerLogin(data:Login){
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.pwd}`)
  }

  setToken(seller:string){
    localStorage.setItem('seller ',JSON.stringify(seller));
  }

  getToken(){
    return JSON.parse(localStorage.getItem('seller '));
  }

  loginSetLocalSrorage(seller){
    localStorage.setItem('seller',JSON.stringify(seller));
  }

  loginGetLocalStorage(){
    return JSON.parse(localStorage.getItem('seller'));
  }
}
