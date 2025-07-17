import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericModalErrorService {

  public isModalErrorActive = new BehaviorSubject<boolean>(false);

  public showModalError(error: boolean): void {
      this.isModalErrorActive.next(error);
  }

  public verifyStatusModalError(): Observable<boolean> {
    return this.isModalErrorActive.asObservable();
  }

}
