import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerGuard } from './auth/seller.guard';
import { CardComponent } from './card/card.component';
import { AddProductComponent } from './folder/add-product/add-product.component';
import { HomeComponent } from './folder/home/home.component';
import { SellerAuthComponent } from './folder/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './folder/seller-home/seller-home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './folder/login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerUpdateProductComponent } from './folder/seller-update-product/seller-update-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    component: SellerUpdateProductComponent,
    path: 'update-product/:id'
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent, canActivate: [SellerGuard]
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    component: SearchComponent,
    path: 'search/:query'
  },
  {
    component: ProductDetailsComponent,
    path: 'details/:productId'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
