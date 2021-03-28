import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},//anasayfa
  {path:"products", component:ProductComponent},//product adresine giderse ne gostereyim
  {path:"products/category/:categoryId", component:ProductComponent}//categoryId diye bir degisken gonderecegim sabite ekle.
  
];//router-outlette ne gostereyim

@NgModule({
  imports: [RouterModule.forRoot(routes)],//uygulamamiz icin rootlari devreye al
  exports: [RouterModule]
})
export class AppRoutingModule { }
