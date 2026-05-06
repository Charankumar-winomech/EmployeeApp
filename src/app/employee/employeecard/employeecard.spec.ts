import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCard } from './employeecard';

describe('ApiCard', () => {
  let component: ApiCard;
  let fixture: ComponentFixture<ApiCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
