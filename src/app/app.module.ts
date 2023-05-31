import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './folder/home/home.component';
import { SellerAuthComponent } from './folder/seller-auth/seller-auth.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './folder/seller-home/seller-home.component';
import { AddProductComponent } from './folder/add-product/add-product.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './folder/login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerUpdateProductComponent } from './folder/seller-update-product/seller-update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    AddProductComponent,
    CardComponent,
    SearchComponent,
    LoginComponent,
    ProductDetailsComponent,
    SellerUpdateProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
