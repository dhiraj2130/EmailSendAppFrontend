import { Component, OnInit } from '@angular/core';
import { Emailmodel } from '../emailmodel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.scss']
})
export class SendemailComponent implements OnInit {

  public emailModel:Emailmodel;

  constructor() { }

  ngOnInit() {

    this.emailModel = {
      emailTo:'',
      emailFrom:'',
      emailSubject:'',
      emailContent:''
    }
  }
  onSubmit(formValue){
    console.log(formValue.emailTo);
  }
  sendEmail(emailModel:Emailmodel,isValid:boolean){
    console.log(emailModel,isValid);
  }

}
