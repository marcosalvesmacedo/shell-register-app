import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { GenericModalErrorService } from './core/services/generic-modal-error.service';
import { MENU_MESSAGES } from './core/constants/commons.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public labels = MENU_MESSAGES;

  constructor(
    public loaderService: LoaderService,
    public genericModalErrorService: GenericModalErrorService
  ) {}

}
