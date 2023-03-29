import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dataType:string='default';
  sellerStore:any

  constructor(private route:Router) { }

  logOut(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          // console.warn('seller area');
           this.sellerStore = localStorage.getItem('seller');
          
          this.dataType='seller';
        }else{
          console.warn('outside seller area')
          this.dataType='default';
        }
      }
    })

  }
}
