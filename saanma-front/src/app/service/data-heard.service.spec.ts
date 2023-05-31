import { TestBed } from '@angular/core/testing';

import { DataHeardService } from './data-heard.service';

describe('DataHeardService', () => {
  let service: DataHeardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHeardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
