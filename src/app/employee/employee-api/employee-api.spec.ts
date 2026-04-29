import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApi } from './employee-api';

describe('EmployeeApi', () => {
  let component: EmployeeApi;
  let fixture: ComponentFixture<EmployeeApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeApi],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
