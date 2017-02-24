import { TestBed, inject } from '@angular/core/testing';
import { BadgeService } from './badge.service';

describe('BadgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BadgeService]
    });
  });

  it('should ...', inject([BadgeService], (service: BadgeService) => {
    expect(service).toBeTruthy();
  }));
});
