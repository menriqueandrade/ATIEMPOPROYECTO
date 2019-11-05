import { TestBed } from '@angular/core/testing';

import { UtilidadService } from './utilidad.service';

describe('UtilidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilidadService = TestBed.get(UtilidadService);
    expect(service).toBeTruthy();
  });
});
