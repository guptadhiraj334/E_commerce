import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Allservices/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  ProductId:any

  updateForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
    count: new FormControl(''),
    id: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private product: ProductService) { }

  // saveProduct(){
  //   this.updateForm
  // }

  ngOnInit(): void {
     this.ProductId = this.router.snapshot.paramMap.get('id');
    console.log(this.ProductId);

    this.product.getProductById(this.ProductId).subscribe((res) => {
      console.log(res)
      this.updateForm.setValue(res)
    });

   
  }
  Submit(){
    this.product.updateProduct(this.ProductId,this.updateForm.value).subscribe
  }

  reset(){
    this.updateForm.reset();
  }


}
