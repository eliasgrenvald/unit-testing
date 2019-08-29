import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { cold, hot } from 'jasmine-marbles';
import { provideMockActions } from '@ngrx/effects/testing';
import { LoadMapFeatures, LoadMapFeaturesSuccess } from '../actions';
import { EffectsModule } from '@ngrx/effects';
import { MapEffects } from './map.effect';
import { MarkersService } from '../../services';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

describe(`MapEffects`, () => {
  let actions;
  let effects: MapEffects;
  let markersService: MarkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
        HttpClientTestingModule,
				StoreModule.forRoot({}),
				EffectsModule.forRoot([MapEffects])
			],
      providers: [
        provideMockActions(() => actions),
        MarkersService
      ]
    });

    markersService = TestBed.get(MarkersService);
    effects = TestBed.get(MapEffects);
  });

  it('loadFeatures$ should return an observable of map features', () => {
		const features = [
			{
				type: "Feature",
				geometry: { type: "Point", coordinates: [10.240631103515625, 56.171074228546814] }
			},
			{
				type: "Feature",
				geometry: { type: "Point", coordinates: [10.263290405273438, 56.17155205794858] }
			}
		];

    const action = new LoadMapFeatures();
    const completion = new LoadMapFeaturesSuccess(features);

    jest
      .spyOn(markersService, 'load')
      .mockImplementation(() => of(features));

    actions = hot('--a-', { a: action });
		const expected = cold('--(b)', { b: completion });
		
    expect(effects.loadFeatures$).toBeObservable(expected);
  });
});