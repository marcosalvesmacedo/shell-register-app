import { TestBed } from '@angular/core/testing';

import { GenericModalErrorService } from './generic-modal-error.service';
import { of } from 'rxjs';

describe('GenericModalErrorService', () => {
  let service: GenericModalErrorService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          GenericModalErrorService
        ]
      }).compileComponents();
      service = TestBed.inject(GenericModalErrorService);
  
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call showModalError with false value', () => {
    spyOn(service.isModalErrorActive, 'next');
    service.showModalError(false);
    expect(service.isModalErrorActive.next).toHaveBeenCalledWith(false);
  });

  it('should call showModalError with true value', () => {
    spyOn(service.isModalErrorActive, 'next');
    service.showModalError(true);
    expect(service.isModalErrorActive.next).toHaveBeenCalledWith(true);
  });

  it('should call verifyStatusModalError with false value', () => {
    spyOn(service.isModalErrorActive, 'asObservable').and.returnValue(of(false));
    service.verifyStatusModalError().subscribe((resp) => {
      expect(service.isModalErrorActive.getValue()).toEqual(resp);
    });
  });

});
