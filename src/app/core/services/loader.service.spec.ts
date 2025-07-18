import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { of } from 'rxjs';

describe('LoaderService', () => {
  let service: LoaderService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          LoaderService
        ]
      }).compileComponents();
      service = TestBed.inject(LoaderService);
  
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call showLoader with false value', () => {
    spyOn(service.isLoaderActive, 'next');
    service.showLoader(false);
    expect(service.isLoaderActive.next).toHaveBeenCalledWith(false);
  });

  it('should call showLoader with true value', () => {
    spyOn(service.isLoaderActive, 'next');
    service.showLoader(true);
    expect(service.isLoaderActive.next).toHaveBeenCalledWith(true);
  });

  it('should call verifyStatusLoader with false value', () => {
    spyOn(service.isLoaderActive, 'asObservable').and.returnValue(of(false));
    service.verifyStatusLoader().subscribe((resp) => {
      expect(service.isLoaderActive.getValue()).toEqual(resp);
    });
  });

});
