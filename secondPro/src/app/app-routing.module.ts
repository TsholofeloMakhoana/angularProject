import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'nav', component: NavBarComponent},
  { path: '', component: HomePageComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'cart', component: CartComponent},
  { path: 'cart', component: AppComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
