import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent} from './component/registration/registration.component';
import { ProductCatalogComponent} from './component/product-catalog/product-catalog.component';
import { HomeComponent} from './component/home/home.component';
import { FooterComponent} from './component/footer/footer.component';

const routes: Routes = [
  {path:"login", component:LoginComponent}, 
  {path:"registration", component:RegistrationComponent},
  {path:"home", component:HomeComponent}, 
  {path:"product-catalog", component:ProductCatalogComponent},
  {path:"footer", component:FooterComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}