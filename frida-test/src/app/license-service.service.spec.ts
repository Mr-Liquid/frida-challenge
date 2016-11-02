/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LicenseServiceService } from './license-service.service';

describe('Service: LicenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LicenseServiceService]
    });
  });

  it('should ...', inject([LicenseServiceService], (service: LicenseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
