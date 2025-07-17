import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { debounceTime, finalize, Observable, tap } from "rxjs";
import { LoaderService } from "../services/loader.service";
import { GenericModalErrorService } from "../services/generic-modal-error.service";


@Injectable({
    providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

    constructor(
        private loaderService: LoaderService,
        private genericModalErrorService: GenericModalErrorService
    ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.loaderService.showLoader(true);

        return next.handle(request).pipe(
            tap(
                (success) => {
                    if (success instanceof HttpResponse) {
                        // salve um bearer token na sessionStorage ou executa alguma ação
                    }
                },
                (error) => {
                    if (error instanceof HttpErrorResponse) {
                        this.genericModalErrorService.showModalError(true);
                        
                    }
                }
            ),
            finalize(() => {
                setTimeout(() => {
                    this.loaderService.showLoader(false);
                }, 2000);
            })
        )
    }

}