import { Component } from '@angular/core';
import { WELCOME_MESSAGES } from './constants/commons.constants';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  public labels = WELCOME_MESSAGES;
}
