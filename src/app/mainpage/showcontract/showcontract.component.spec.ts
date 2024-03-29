import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcontractComponent } from './showcontract.component';

describe('ShowcontractComponent', () => {
  let component: ShowcontractComponent;
  let fixture: ComponentFixture<ShowcontractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcontractComponent]
    });
    fixture = TestBed.createComponent(ShowcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
