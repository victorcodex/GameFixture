import { TestBed, inject } from '@angular/core/testing';

import { SecondaryFixtureService } from './secondary-fixture.service';

describe('SecondaryFixtureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondaryFixtureService]
    });
  });

  it('should be created', inject([SecondaryFixtureService], (service: SecondaryFixtureService) => {
    expect(service).toBeTruthy();
  }));
});
