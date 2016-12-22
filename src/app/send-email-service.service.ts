import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Emailmodel } from './emailmodel';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const api_url = require('../config');

@Injectable()
export class SendEmailServiceService {

  constructor(private http:Http) { 
  }



  mailSendTestUrl:string;

  public sendEmail(body:Object):Observable<string[]>{
    
    let emailBody = JSON.stringify(body);
    let headers = new Headers();

    this.mailSendTestUrl = api_url.mailSendTestUrl;

    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({headers:headers});
    
    return this.http.post(this.mailSendTestUrl,emailBody,options)
        .map((res:Response) => {
          res.json()
        })
        .catch((error:any) => Observable.throw(error));//  error is lost here. need better code
    
  }
}
