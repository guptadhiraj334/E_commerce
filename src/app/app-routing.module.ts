import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerGuard } from './auth/seller.guard';
import { AddProductComponent } from './folder/add-product/add-product.component';
import { HomeComponent } from './folder/home/home.component';
import { SellerAuthComponent } from './folder/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './folder/seller-home/seller-home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'add-product',
    component:AddProductComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent, canActivate:[SellerGuard]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
