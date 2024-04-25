import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {

  constructor(public loadingservice:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    this.loadingservice.loading.next(true);
    return next.handle(request).pipe(
      catchError(err=>{
        console.log(err);
        return throwError(err);
      }),
      finalize(()=>{
        this.loadingservice.loading.next(false);
      })
    )
  }
}
 




