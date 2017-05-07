import { TestBed, inject } from '@angular/core/testing';

import { MainDialogService } from './main-dialog.service';

describe('MainDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainDialogService]
    });
  });

  it('should ...', inject([MainDialogService], (service: MainDialogService) => {
    expect(service).toBeTruthy();
  }));
});
