import {Injectable} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http/src/request';
import {HttpHandler} from '@angular/common/http/src/backend';
import {BasicAuthenticationService} from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // tslint:disable-next-line:prefer-const
    let basicAuthHeaderString;
    let username;
    basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {

      /*let username;
      let password;*/
      /* username = 'qwer';  // **********
       password = 'dummy';*/
      //  basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }

}
