import { Component, OnInit } from '@angular/core';
import { Emailmodel } from '../emailmodel';
import { FormsModule } from '@angular/forms';
import { SendEmailServiceService } from '../send-email-service.service';

//import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.scss']
})
export class SendemailComponent implements OnInit {

  emailModel:Emailmodel;
  sendEmailServiceService :SendEmailServiceService;
  sendEmailStatus:boolean;
  //observable:Observable<string>;
  constructor(private _sendEmailServiceService :SendEmailServiceService,_emailModel:Emailmodel) {
    this.emailModel = _emailModel;
    this.sendEmailServiceService = _sendEmailServiceService;
  }

  ngOnInit() {
  this.sendEmailStatus = false;

  }

  sendEmail(isValid:boolean){
    this.sendEmailStatus = false;
    this.sendEmailServiceService.sendEmail(this.emailModel).subscribe(
        stringreturnvalue =>{
          this.sendEmailStatus = true;
        },
        err =>{
         console.log("error"+err.toString());
        }
    );
  }
  

}
