import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Allservices/product.service';
import { products } from '../folder/data-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchresult:undefined|products[];
  constructor(private product: ProductService, private router: ActivatedRoute) {
  }
  ngOnInit(): void {
      let query = this.router.snapshot.paramMap.get('query');

    this.product.searchProduct(query).subscribe((res:any) => {
      this.searchresult = res;
      console.log(res)
    })
  }

}
