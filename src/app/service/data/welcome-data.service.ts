import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
  /* let basicAuthHeaderString;
    let headers;
  basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

   headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });*/

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      // {headers}
    );
    // console.log('Execute Hello World Bean Service');
  }

// `https:// localhost:8080/hello-world/path-variable/${name}`
//  **********************************************************************************************

  /*createBasicAuthenticationHttpHeader() {
    let username;
    let password;
    username = 'qwer';  // **********
    password = 'dummy';

    let basicAuthHeaderString;
    return basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  }*/

  // Access to XMLHttpRequest at
  // 'http://localhost:8080/hello-world/path-variable/in28minutes'
  // from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.

  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/in28minutes' from origin 'http://localhost:4200'
  // has been blocked by CORS policy:
  // Response to preflight request doesn't pass
  // access control check: It does not have HTTP ok status
}
