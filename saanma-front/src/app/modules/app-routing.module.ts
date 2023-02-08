import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TableProductsComponent } from './table-products/table-products.component';


const routes: Routes = [
  {
    path:"", 
    component:ListProductComponent
  },
  {
    path:"listProduct",  
    component:ListProductComponent
  },
  {
    path:"listProductDetails/:id",  
    component:ProductDetailsComponent
  },
  {
    path:"tableProducts",  //pendiente revisar que nombre dejar
    component:TableProductsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


