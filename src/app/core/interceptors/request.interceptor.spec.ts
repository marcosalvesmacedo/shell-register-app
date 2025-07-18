import { TestBed } from '@angular/core/testing';

import { RequestInterceptor } from './request.interceptor';
import { LoaderService } from '../services/loader.service';
import { GenericModalErrorService } from '../services/generic-modal-error.service';
import { HttpErrorResponse, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('RequestInterceptor', () => {
  let interceptor: RequestInterceptor;
  const loaderServiceStub = jasmine.createSpyObj('LoaderService', ['showLoader']);
  const genericModalErrorServiceStub = jasmine.createSpyObj('GenericModalErrorService', ['showModalError']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        RequestInterceptor,
        { provide: LoaderService, useValue: loaderServiceStub },
        { provide: GenericModalErrorService, useValue: genericModalErrorServiceStub }
      ]
    }).compileComponents();
    interceptor = TestBed.inject(RequestInterceptor);

  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should call intercept with success', (done) => {
    const mockRequest = new HttpRequest('GET', '/api/test');
    const mockResponse = new HttpResponse({ status: 200 });
    const next: HttpHandler = {
      handle: () => of(mockResponse)
    };
    spyOn(next, 'handle').and.callThrough();

    jasmine.clock().install();

    interceptor.intercept(mockRequest, next).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    expect(loaderServiceStub.showLoader).toHaveBeenCalledWith(true);
    expect(next.handle).toHaveBeenCalledWith(mockRequest);
    jasmine.clock().tick(2000);

    expect(loaderServiceStub.showLoader).toHaveBeenCalledWith(false);

    jasmine.clock().uninstall();
    done();
  });

  it('should call intercept with error', (done) => {
    const mockRequest = new HttpRequest('GET', '/api/test');
    const mockError = new HttpErrorResponse({ status: 500 });
    const next: HttpHandler = {
      handle: () => throwError(() => mockError)
    };
    spyOn(next, 'handle').and.callThrough();

    jasmine.clock().install();

    interceptor.intercept(mockRequest, next).subscribe({
      next: () => {},
      error: (err) => {
        expect(err).toEqual(mockError);
        expect(genericModalErrorServiceStub.showModalError).toHaveBeenCalledWith(true);

        jasmine.clock().tick(2000);
        expect(loaderServiceStub.showLoader).toHaveBeenCalledWith(true);
        jasmine.clock().uninstall();
        done();
      }
    });
  });

});
