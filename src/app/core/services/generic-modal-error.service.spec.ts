import { TestBed } from '@angular/core/testing';

import { GenericModalErrorService } from './generic-modal-error.service';

describe('GenericModalErrorService', () => {
  let service: GenericModalErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericModalErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
