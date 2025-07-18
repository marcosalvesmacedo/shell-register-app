import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
     {
          path: '',
          component: WelcomeComponent
     },
     {
     path: 'cadastrar-usuarios',
     loadChildren: () =>
          loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Module'
          }).then(m => m.UserRegisterModule),
     },
     {
     path: 'lista-de-usuarios',
     loadChildren: () =>
          loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          exposedModule: './Module'
          }).then(m => m.UserListModule),
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
