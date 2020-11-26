import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthIntercept } from './auth-Intercept'


export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass:AuthIntercept, multi:true }

]