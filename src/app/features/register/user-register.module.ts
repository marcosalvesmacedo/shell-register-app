import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserRegisterComponent } from './user-register.component';
import { MatTableModule } from '@angular/material/table';
import { UserRegisterRoutingModule } from './user-register-routing.module';

@NgModule({
  declarations: [
    UserRegisterComponent,
  ],
  imports: [
    UserRegisterRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [UserRegisterComponent]
})
export class UserRegisterModule { }
