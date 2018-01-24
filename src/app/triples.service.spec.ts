import { TestBed, inject } from '@angular/core/testing';

import { TriplesService } from './triples.service';

describe('TriplesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriplesService]
    });
  });

  it('should be created', inject([TriplesService], (service: TriplesService) => {
    expect(service).toBeTruthy();
  }));
});
