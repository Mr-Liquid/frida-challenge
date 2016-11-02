import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('https://frida-test.firebaseio.com/api/users/license.json')
      .map((response: Response) => response.json());
  }

  sendData(obj:any){
    const body = JSON.stringify(obj);
    const headers = new Headers({
      "Content-Type":"application/json"
    });
    return this.http.post('https://frida-test.firebaseio.com/api/users/usersData.json', body,{
      headers: headers
    })
        .map((response: Response) => response.json())
        .catch(this.errorHandler);
  }

  getOwnData(){
    return this.http.get('https://frida-test.firebaseio.com/api/users/usersData.json')
        .map((response: Response) => response.json());
  }

  private errorHandler(error: any){
    console.log(error);
    return Observable.throw(error.json());
  }

}
