import { TestBed } from '@angular/core/testing';

import { EstudantesService } from './estudantes.service';

describe('EstudantesService', () => {
  let service: EstudantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
