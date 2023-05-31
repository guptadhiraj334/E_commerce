import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Allservices/product.service';
import { SellerService } from 'src/app/Allservices/seller.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ProductForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
    count: new FormControl(''),
    id: new FormControl('')

  })

  constructor(private pro: ProductService, private route: Router) { }

  saveProduct() {
    this.pro.addpProducts(this.ProductForm.value).subscribe((res) => {
      console.log(res)
      // this.route.navigate(['seller-home'])

    })
  }

  reset() {
    this.ProductForm.reset();
  }

  ngOnInit(): void {
  }

}
