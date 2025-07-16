import { Injectable } from '@angular/core';
import { UserRegisterModule } from '../user-register.module';
import { RegisterService } from '../services/register.service';
import { RegisterAdaptedResponse } from '../models/register.model';

@Injectable({
  providedIn: UserRegisterModule
})
export class RegisterFacade {

  constructor(
    private registerService: RegisterService
  ) { }

}
