import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerBookingsComponent } from './owner-bookings.component';

describe('OwnerBookingsComponent', () => {
  let component: OwnerBookingsComponent;
  let fixture: ComponentFixture<OwnerBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
