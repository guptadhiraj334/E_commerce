import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, SignUp } from '../folder/data-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  UserRegistration(data:SignUp){
    return this.http.post(`http://localhost:3000/User`,data);
  }

  UserLogin(body:Login){
    return this.http.get(`http://localhost:3000/User?email=${body.email}&pwd=${body.pwd}`)
  }

 
}
