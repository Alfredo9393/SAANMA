import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/module/component', 
    pathMatch:'full' 
  },
  {
    path:"module",
    component:SkeletonComponent,
    children:[
      {
      path:'component',
      loadChildren: () => import('./modules/modules.module').then( (m) => m.ModulesModule ) 
      },
      {
        path:'**',
        redirectTo:'/module/component',
        pathMatch:'full'
      }
  
    ],

  },
  {
    path:'**',
    redirectTo:'/module/component',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
