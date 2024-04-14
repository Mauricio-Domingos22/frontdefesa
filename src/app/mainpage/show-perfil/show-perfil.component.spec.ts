import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPerfilComponent } from './show-perfil.component';

describe('ShowPerfilComponent', () => {
  let component: ShowPerfilComponent;
  let fixture: ComponentFixture<ShowPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPerfilComponent]
    });
    fixture = TestBed.createComponent(ShowPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
