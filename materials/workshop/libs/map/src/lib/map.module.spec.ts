import { async, TestBed } from '@angular/core/testing';
import { MapModule } from './map.module';

describe('MapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MapModule).toBeDefined();
  });
});
