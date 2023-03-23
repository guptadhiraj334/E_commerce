import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  login=true;
  sellerForm=false;

  registration:FormGroup=new FormGroup({
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    number:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required])
  })

  LoginFrom:FormGroup=new FormGroup({
    username:new FormControl('',Validators.required),
    pwd:new FormControl('',Validators.required)
  })
 

  constructor() { }

  onLoginForm(){
   this.login=true
  }

  Submit(){
    console.log(this.registration.value);
  }

  Reset(){
    this.registration.reset()
  }



  ngOnInit(): void {
  
  }

}
function display() {
  throw new Error('Function not implemented.');
}

