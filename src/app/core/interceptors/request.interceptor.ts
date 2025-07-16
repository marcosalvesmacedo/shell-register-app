import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            tap(
                (success) => {
                    if (success instanceof HttpResponse) {
                        // salver um token ou algo parecido
                    }
                },
                (error) => {
                    if (error instanceof HttpErrorResponse) {
                        console.error()
                    }
                }
            ),
            finalize(() => {
                // finalizar loader
            })
        )
    }

}