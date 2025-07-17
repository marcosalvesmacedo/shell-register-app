import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { GenericModalErrorService } from './core/services/generic-modal-error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public loaderService: LoaderService,
    public genericModalErrorService: GenericModalErrorService
  ) {}

}
