import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { authRedirectGuard } from './auth-redirect.guard';


const routes: Routes = [
  {
    path : 'home',
    loadComponent:() => import("./components/home/home.component").then(m => m.HomeComponent),
    canActivate : [authGuard]
  },
  {
    path : 'about',
    loadComponent : () => import("./components/about/about.component").then(m => m.AboutComponent),
    canActivate : [authGuard]
  },
  {
    path : 'login',
    loadComponent : () => import("./components/login/login.component").then(m => m.LoginComponent),
    canActivate : [authRedirectGuard]
   
  },
  {
    path : 'contactus',
    loadComponent : () => import("./components/contactus/contactus.component").then(m => m.ContactusComponent),
    canActivate : [authGuard]
  },
  {
    path : 'profile',
    loadComponent : () => import('./components/profile/profile.component').then(m => m.ProfileComponent),
    canActivate : [authGuard]
  },
  {
    path: 'product-store',
    loadComponent: () => import('./components/product-store/product-store.component').then(m => m.ProductStoreComponent),
    canActivate: [authGuard],
    
  },
  {
    path: 'product-store/:id',
    loadComponent: () => import('./components/product-store/product-details/product-details.component').then(m => m.ProductDetailsComponent),
    canActivate: [authGuard]
  },
  {
    path:'image-carousel',
    loadComponent: () => import('./components/image-carousel/image-carousel.component').then(m => m.ImageCarouselComponent),
    canActivate: [authGuard]
  },
  {
    path : 'todo-list',
    loadComponent: () => import('./components/todo-list/todo-list.component').then(m => m.TodoListComponent)
  },

   { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
