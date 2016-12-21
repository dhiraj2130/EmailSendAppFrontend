import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Emailmodel } from './emailmodel';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SendEmailServiceService {

  constructor(private http:Http) { 
  }
  private mailSendTestUrl = "http://localhost:8000/mail";

  public sendEmail(body:Object):Observable<string>{
    
    let emailBody = JSON.stringify(body);
    console.log(emailBody);
    //let headers = new Headers();//{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
   // let headers = new Headers({'Access-Control-Allow-Origin':'*'});
    //headers.append('Content-Type', 'application/json');
    //headers.append('Access-Control-Allow-Origin', '*');

    //let options = new RequestOptions({headers:headers});
    
    return this.http.post(this.mailSendTestUrl,emailBody)//,options
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(' server error occurred'));// error is lost here. need better code
    
  }
}
