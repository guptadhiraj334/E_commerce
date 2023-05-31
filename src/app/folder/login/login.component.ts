import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Allservices/user.service';
import { SignUp } from '../data-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showForm: boolean = true;

  registrationForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)

  })

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)
  })

  constructor(private user:UserService) { }

  SaveUser(){
    this.user.UserRegistration(this.registrationForm.value).subscribe((results:any)=>{
      console.log(results);
      localStorage.setItem('user',JSON.stringify(results))
    })
  }

  LoggedIn(){
    this.user.UserLogin(this.registrationForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

  // switch login and registration form
  display() {
    this.showForm = false;
  }
  register() {
    this.showForm = true;
  }

  ngOnInit(): void {
  }

}
