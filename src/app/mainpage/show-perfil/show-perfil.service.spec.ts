import { TestBed } from '@angular/core/testing';

import { ShowPerfilService } from './show-perfil.service';

describe('ShowPerfilService', () => {
  let service: ShowPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
