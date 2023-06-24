import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { AddtocartComponent } from './products/addtocart/addtocart.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',  component: ProductsComponent
  },
 
  {
    path: 'product-detail/:id', component: ProductDetailComponent
  },
 
  {
    path: 'seller', component: SellerComponent
  },
  {
    path: 'admin', component: AdminComponent
  },

  {
    path: 'addtocart', component: AddtocartComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
