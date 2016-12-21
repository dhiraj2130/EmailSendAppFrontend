/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SendEmailServiceService } from '../send-email-service.service';

import { SendemailComponent } from './sendemail.component';

class mockService {
  constructor(){}
}
describe('SendemailComponent', () => {
  let component: SendemailComponent;
  let fixture: ComponentFixture<SendemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      providers : [{provide:SendEmailServiceService,useClass:mockService}],
      declarations: [ SendemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([SendEmailServiceService],(_SendEmailServiceService) => {
    expect(component).toBeTruthy();
  });
});
