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
  //observable:Observable<string>;
  constructor(private _sendEmailServiceService :SendEmailServiceService,_emailModel:Emailmodel) {
    this.emailModel = _emailModel;
    this.sendEmailServiceService = _sendEmailServiceService;
  }

  ngOnInit() {

    // this.emailModel = {
    //   emailTo:'',
    //   emailFrom:'',
    //   emailSubject:'',
    //   emailContent:''
    // }
    //this.sendEmailServiceService = new SendEmailServiceService();
  }
  onSubmit(formValue){
    //console.log(formValue.emailTo);
  }
  sendEmail(isValid:boolean){
   // console.log(emailModel,isValid);
    this.sendEmailServiceService.sendEmail(this.emailModel).subscribe(
        stringreturnvalue =>{
          console.log(JSON.stringify(stringreturnvalue));
        },
        err =>{
          console.log(err);
        }
    );
  }
  

}
