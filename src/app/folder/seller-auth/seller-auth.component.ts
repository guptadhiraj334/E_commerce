import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/Allservices/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

   sellerForm = false;
   getRes:any
   name:any
   submitStorage:any
   data: any

  registration: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.minLength(10)]),
    pwd: new FormControl('', [Validators.required])
  })

  LoginFrom: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)
  })


  constructor(private seller: SellerService, private router: Router) { }

  // For Registration form Submit and reset function

  Submit() {
    this.seller.SellerPost(this.registration.value).subscribe((res: any) => {
      console.log(res);
      this.seller.setToken(res);
      this.submitStorage =this.seller.getToken();
      //  this.getRes=JSON.parse(this.submitStorage)
      console.log(this.submitStorage);
    })

  }


  Reset() {
    this.registration.reset()
  }

  // For Login form Submit and reset function

  loginSubmit() {
    this.seller.SellerLogin(this.LoginFrom.value).subscribe((res:any)=>{ 
      console.log(res) 
      this.seller.loginSetLocalSrorage(res);
      this.name=this.seller.loginGetLocalStorage();
    });
  }
 
  loginReset() {
    this.LoginFrom.reset();
  }

  //instead of RouterLink this  function used 
  openSellerLogin() {
    this.sellerForm = true;
  }

  openSellerSignup() {
    this.sellerForm = false;
  }

  logOut(){
    localStorage.clear();
  }


  ngOnInit(): void {

  }

}


