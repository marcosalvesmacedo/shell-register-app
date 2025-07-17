import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generic-modal-error',
  templateUrl: './generic-modal-error.component.html',
  styleUrls: ['./generic-modal-error.component.scss']
})
export class GenericModalErrorComponent {

  @Input() _activeGenericModalError = new Observable<boolean>();
  @Output() close = new EventEmitter<boolean>();

  public closeModal(): void {
    this.close.emit(false);
  }
}
