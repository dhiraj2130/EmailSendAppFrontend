/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendEmailServiceService } from './send-email-service.service';

describe('SendEmailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendEmailServiceService]
    });
  });

  it('should ...', inject([SendEmailServiceService], (service: SendEmailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
