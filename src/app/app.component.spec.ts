/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { FormsModule } from '@angular/forms';

import { SendEmailServiceService } from './send-email-service.service';


class mockService {
  constructor(){}
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      providers : [{provide:SendEmailServiceService,useClass:mockService}],
      declarations: [
        AppComponent,SendemailComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(inject([SendEmailServiceService],(_SendEmailServiceService) => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Send Email App Works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Send Email App Works!');
  }));

  it('should render title in a  tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Send Email');
    expect(compiled.querySelector('section').textContent).toContain('Email Send Application');
  }));
});
