import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoaderActive = new BehaviorSubject<boolean>(false);

  public showLoader(active: boolean): void {
      this.isLoaderActive.next(active);
  }

  public verifyStatusLoader(): Observable<boolean> {
    return this.isLoaderActive.asObservable();
  }

}
