import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
// export Class JwtInterceptor
export class JwtInterceptor implements HttpInterceptor{
  constructor(){}
  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
   if(localStorage.getItem('currentUser')){
     let currentUser=JSON.parse(localStorage.getItem('currentUser'));
     //check the current user and token
     if(currentUser && currentUser.token){
       request=request.clone(
         {
           setHeaders:{
             Authorization:`Bearer ${currentUser.token}`
           }
         }
       );
     }
   }
    return next.handle(request);
  }

}
// const Its a veriable/
export const JwtInterceptorProvider ={
  provide: HTTP_INTERCEPTORS,
  useClass:JwtInterceptor,
  multi:true
}
