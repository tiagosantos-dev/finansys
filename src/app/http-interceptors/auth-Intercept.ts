import { HttpHandler, HttpErrorResponse, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { ɵConsole } from '@angular/core';
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'


export class AuthIntercept implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler){

        let token = window.localStorage.getItem('token');
        let request : HttpRequest<any> = req;
        if(token){
            request = req.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`)
            });

        }else{
            return next.handle(request).pipe(catchError(this.handlerError))
        }
    }

    private handlerError(error : HttpErrorResponse){

        if(error.error instanceof ErrorEvent){
            console.error('error in frontend', error.message)

        }else{
            console.log('error in backend:', error.status)
            console.log('error in backend status code;:', error.message)
        }

        return throwError('Error Inesperado, tente novamente.')
    }

}