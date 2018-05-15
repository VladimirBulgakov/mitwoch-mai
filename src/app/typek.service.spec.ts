import { TestBed, inject } from '@angular/core/testing';

import { TypekService } from './typek.service';

describe('TypekService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypekService]
    });
  });

  it('should be created', inject([TypekService], (service: TypekService) => {
    expect(service).toBeTruthy();
  }));
});
