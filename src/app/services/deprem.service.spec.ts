/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepremService } from './deprem.service';

describe('Service: Deprem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepremService]
    });
  });

  it('should ...', inject([DepremService], (service: DepremService) => {
    expect(service).toBeTruthy();
  }));
});
