import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Allservices/product.service';
import { products } from '../folder/data-interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData: any
  productQuantity: number = 1;

  constructor(private router: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.router.snapshot.paramMap.get('productId');
    console.log(productId);
    this.product.getProductById(productId).subscribe((res) => {
      console.log(res)
      this.productData = res;
    })

  }

  productIncrease(data: string) {
    if (this.productQuantity < 20 && data === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && data === 'min') {
      this.productQuantity -= 1;

    }

  }


}
