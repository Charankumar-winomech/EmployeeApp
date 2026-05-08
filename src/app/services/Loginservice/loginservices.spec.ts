import { TestBed } from '@angular/core/testing';

import { Loginservices } from './loginservices';

describe('Loginservices', () => {
  let service: Loginservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loginservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
