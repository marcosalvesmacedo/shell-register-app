import { Injectable } from '@angular/core';
import { UserRegisterModule } from '../user-register.module';
import { RegisterService } from '../services/register.service';
import { RegisterAdaptedResponse } from '../models/register.model';
import { RegisterFormModel } from '../models/register-form.model';
import { FormGroup } from '@angular/forms';

@Injectable()
export class RegisterFacade {

  private registerForm = new RegisterFormModel();

  constructor(
    private registerService: RegisterService
  ) { }

  public loginForm(): FormGroup {
      return this.registerForm.builder();
  }
  
  public async onRegisterSubmit(): Promise<any> {
    const loginFormRawValue = this.loginForm().getRawValue();
    this.registerService
        .register(loginFormRawValue)
        .subscribe((user) => {
          
        })
  }

}
