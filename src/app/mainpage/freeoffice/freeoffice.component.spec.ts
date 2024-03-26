import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeofficeComponent } from './freeoffice.component';

describe('FreeofficeComponent', () => {
  let component: FreeofficeComponent;
  let fixture: ComponentFixture<FreeofficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeofficeComponent]
    });
    fixture = TestBed.createComponent(FreeofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
