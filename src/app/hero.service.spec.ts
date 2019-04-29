import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
    RouterTestingModule,
    HttpClientModule
  ]
}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
