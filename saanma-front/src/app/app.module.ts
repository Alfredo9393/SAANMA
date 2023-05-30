import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselIndicatorsComponent } from './shared/carousel-indicators/carousel-indicators.component';
import { ViewImagenComponent } from './shared/view-imagen/view-imagen.component';
//alfredo del anel
//modulos
import { ListProductComponent } from './modules/list-product/list-product.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';
import { TableProductsComponent } from './modules/table-products/table-products.component';
import { TableProducts1Component } from './modules/table-products1/table-products1.component';
import { TableProducts2Component } from './modules/table-products2/table-products2.component';


import { ProductCategoryComponent } from './modules/product-category/product-category.component';

//modulos

import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { ButtonAddComponent } from './shared/button-add/button-add.component';
import { Button1Component } from './shared/button1/button1.component';
import { CardListProductComponent } from './shared/card-list-product/card-list-product.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { Button2Component } from './shared/button2/button2.component';
import { Button3Component } from './shared/button3/button3.component';
import { SearchComponent } from './shared/search/search.component';
import { SearchListComponent } from './shared/search-list/search-list.component';
import { IconCarComponent } from './shared/icons/icon-car/icon-car.component';
import { IconBackComponent } from './shared/icons/icon-back/icon-back.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Se agrega este para que funcione angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

//se importa para poder ocupar el cliente http
import { HttpClientModule } from '@angular/common/http';


import { MatFormFieldModule } from '@angular/material/form-field';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import { HeaderHomeComponent } from './shared/header/header-home/header-home.component';
import { Header1Component } from './shared/header/header1/header1.component';

// ag grid component
import { NumberFloatingFilterComponent } from './shared/ag-grid-component/NumberFloatingFilter.component';

import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    //layout
    SkeletonComponent,

    //modulos
    ListProductComponent,
    ProductDetailsComponent,
    TableProductsComponent,
    TableProducts1Component,
    TableProducts2Component,

    ProductCategoryComponent,
    
    //share
    CarouselIndicatorsComponent,
    ViewImagenComponent,
    ButtonAddComponent,
    Button1Component,
    CardListProductComponent,
    FooterComponent,
    NavigationComponent,
    Button2Component,
    Button3Component,
    SearchComponent,
    SearchListComponent,
    IconCarComponent,
    IconBackComponent,
    HeaderHomeComponent,
    Header1Component,
    NumberFloatingFilterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    //implementacion de ag grid
    AgGridModule, 


    //para que funcione el numero de filas que debe tener una pagian
    BrowserAnimationsModule,

    //material angular
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    //material angular

    MatFormFieldModule,
DragDropModule,
MatCheckboxModule,
ReactiveFormsModule,



    //se importa para poder ocupar el cliente http
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



