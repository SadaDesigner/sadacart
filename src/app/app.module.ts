import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './products/card/card.component';
import { FiltersComponent } from './products/filters/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { AddtocartComponent } from './products/addtocart/addtocart.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CardComponent,
    FiltersComponent,
    SellerComponent,
    AdminComponent,
    AddtocartComponent,
    TopbarComponent,
    ProductDetailComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
