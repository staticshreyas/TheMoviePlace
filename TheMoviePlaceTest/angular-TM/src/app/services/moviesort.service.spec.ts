import { TestBed } from '@angular/core/testing';

import { MoviesortService } from './moviesort.service';

describe('MoviesortService', () => {
  let service: MoviesortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
