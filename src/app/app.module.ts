import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Emailmodel } from './emailmodel';
//import appRoutes from "./app.routes";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { SendEmailServiceService } from './send-email-service.service';


const routes = [
  {path:'home',component:AppComponent},
   {path:'sendemail',component:SendemailComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    SendemailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [SendEmailServiceService,Emailmodel],
  bootstrap: [AppComponent]
})
export class AppModule { }
