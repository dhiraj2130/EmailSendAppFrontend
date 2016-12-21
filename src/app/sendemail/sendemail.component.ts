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

  public emailModel:Emailmodel;
  //sendEmailServiceService :SendEmailServiceService;
  //observable:Observable<string>;
  constructor(private sendEmailServiceService :SendEmailServiceService) {}

  ngOnInit() {

    this.emailModel = {
      emailTo:'',
      emailFrom:'',
      emailSubject:'',
      emailContent:''
    }
    //this.sendEmailServiceService = new SendEmailServiceService();
  }
  onSubmit(formValue){
    console.log(formValue.emailTo);
  }
  sendEmail(emailModel:Emailmodel,isValid:boolean){
    console.log(emailModel,isValid);
    this.sendEmailServiceService.sendEmail(emailModel).subscribe(
        stringreturnvalue =>{
          console.log(JSON.stringify(stringreturnvalue));
        },
        err =>{
          console.log(err);
        }
    );
  }
  

}
