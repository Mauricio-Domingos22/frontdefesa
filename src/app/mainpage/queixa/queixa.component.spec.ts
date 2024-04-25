import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueixaComponent } from './queixa.component';

describe('QueixaComponent', () => {
  let component: QueixaComponent;
  let fixture: ComponentFixture<QueixaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueixaComponent]
    });
    fixture = TestBed.createComponent(QueixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
