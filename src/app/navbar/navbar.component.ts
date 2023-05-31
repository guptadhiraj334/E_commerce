import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dataType:string='default';
  sellerStore:any
  userName:string="";
  sellerName:string="";

  constructor(private route:Router) { }
  
  logOut(){
    localStorage.clear();
    this.route.navigate([`/`]);
  }

  userLogout(){
    localStorage.clear();
    this.route.navigate([`/login`]);
  }

  searchProducts(data:string){
    console.log(data);
    this.route.navigate([`search/${data}`]);
  }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.log('seller area');
           this.sellerStore = localStorage.getItem('seller');
           let local  = this.sellerStore && JSON.parse(this.sellerStore);
           this.sellerName = local.name;
           this.dataType='seller';
          console.log(this.sellerName);
        } else if(localStorage.getItem('user')){
           let userStore = localStorage.getItem('user');
           let userData = userStore && JSON.parse(userStore);
           this.userName = userData.name
           this.dataType='user'; 
        }
        else{
          console.log('outside seller area')
          this.dataType='default';  
        }
      }
    })  

  }
}
