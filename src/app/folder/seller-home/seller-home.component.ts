import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Allservices/product.service';
import { SellerService } from 'src/app/Allservices/seller.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  products:any

  constructor(private prod:ProductService) {
    this.prod.getProducts().subscribe((res)=>{this.products=res,console.log(res)});
   }

  ngOnInit(): void {
  }

}
