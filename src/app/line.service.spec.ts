import { TestBed, inject } from '@angular/core/testing';

import { LineService } from './line.service';

describe('LineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineService]
    });
  });

  it('should ...', inject([LineService], (service: LineService) => {
    expect(service).toBeTruthy();
  }));

  it('should return true if todo found', inject([LineService], (service: LineService) => {
    let lineFounded = service.getLineById(1);
    expect(lineFounded.id).toEqual(1);
  }));

});
