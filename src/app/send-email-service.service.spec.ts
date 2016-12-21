/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendEmailServiceService } from './send-email-service.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


describe('SendEmailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendEmailServiceService, Http]
    });
  });

  xit('should ...', inject([SendEmailServiceService], (service: SendEmailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
