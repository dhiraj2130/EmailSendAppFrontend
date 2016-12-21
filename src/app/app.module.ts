import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Emailmodel } from './emailmodel';


import { AppComponent } from './app.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { SendEmailServiceService } from './send-email-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SendemailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [SendEmailServiceService,Emailmodel],
  bootstrap: [AppComponent]
})
export class AppModule { }
