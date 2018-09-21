import { TestBed, inject } from '@angular/core/testing';

import { LoginExecService } from './login-exec.service';

describe('LoginExecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginExecService]
    });
  });

  it('should be created', inject([LoginExecService], (service: LoginExecService) => {
    expect(service).toBeTruthy();
  }));
});
