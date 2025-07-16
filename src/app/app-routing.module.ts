import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { UserListComponent } from './features/user-list/user-list.component';
import { UserRegisterComponent } from './features/register/user-register.component';

const routes: Routes = [
     {
          path: '',
          component: WelcomeComponent
     },
     {
          path: 'cadastrar-usuarios',
          loadChildren: () => import('./features/register/user-register.module').then(m => m.UserRegisterModule),
     },
     {
          path: 'lista-de-usuarios',
          loadChildren: () => import('./features/user-list/user-list.module').then(m => m.UserListModule),
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
