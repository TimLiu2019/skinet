import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'test-error', component: TestErrorComponent},

  // lazy loading, load module when click shop
  {path:'shop',loadChildren: ()=>import('./shop/shop.module').then(mod => mod.ShopModule)},
 // {path:'shop', component: ShopComponent},
 // {path:'shop/:id', component: ProductDetailsComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
