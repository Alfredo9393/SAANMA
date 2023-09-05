import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TableProductsComponent } from './table-products/table-products.component';
import { TableProducts1Component } from './table-products1/table-products1.component';
import { TableProducts2Component } from './table-products2/table-products2.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { PendingTaskComponent } from './pending-task/pending-task.component';

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
    component:TableProducts1Component
  },
  {
    path:"tableProducts2",  //pendiente revisar que nombre dejar
    component:TableProducts1Component
  },
  {
    path:"tableProducts-table-angular",  //pendiente revisar que nombre dejar - table angular
    component:TableProductsComponent
  },
  {
    path:"productCategory",
    component:ProductCategoryComponent
  },
  {
    path:"pendingTask",
    component:PendingTaskComponent
  }


  

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


