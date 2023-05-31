import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Allservices/product.service';
import { SellerService } from 'src/app/Allservices/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  products:any;
  getProducts:any
  constructor(private home:ProductService) { 
    this.home.limitProduct().subscribe((res)=>{this.products=res,console.log(res)})
    this.home.getProducts().subscribe((res)=>{this.getProducts=res,console.log(res)});
  }

  ngOnInit(): void {
    
  }

}
