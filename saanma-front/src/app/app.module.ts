import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselIndicatorsComponent } from './shared/carousel-indicators/carousel-indicators.component';
import { ViewImagenComponent } from './shared/view-imagen/view-imagen.component';
import { ListProductComponent } from './modules/list-product/list-product.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';
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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    //layout
    SkeletonComponent,

    //modulos
    ListProductComponent,
    ProductDetailsComponent,
    
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
    SearchListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



