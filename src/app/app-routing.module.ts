import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from 'src/app/pages/login/login.page';
import { OrderCardComponent } from './components/order-card/order-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    // loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    component: LoginPage
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'delivery-list',
    loadChildren: () => import('./pages/delivery-list/delivery-list.module').then(m => m.DeliveryListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  declarations: [OrderCardComponent]
})
export class AppRoutingModule { }
