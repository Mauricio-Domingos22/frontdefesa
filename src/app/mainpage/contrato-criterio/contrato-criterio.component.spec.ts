import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoCriterioComponent } from './contrato-criterio.component';

describe('ContratoCriterioComponent', () => {
  let component: ContratoCriterioComponent;
  let fixture: ComponentFixture<ContratoCriterioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratoCriterioComponent]
    });
    fixture = TestBed.createComponent(ContratoCriterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
