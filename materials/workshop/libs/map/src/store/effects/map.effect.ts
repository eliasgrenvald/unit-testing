import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { MarkersService } from '../../services';
import { IMapStore } from '../reducers';
import { LOAD_MAP_FEATURES, LoadMapFeaturesSuccess } from '../actions';


@Injectable()
export class MapEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly markersService: MarkersService,
		protected store: Store<IMapStore>
	) {}

	@Effect()
	public loadFeatures$ = this.actions$.pipe(
		ofType(LOAD_MAP_FEATURES),
		switchMap(() =>
			this.markersService
				.load()
				.pipe(map((features) => new LoadMapFeaturesSuccess(features)))
		)
	);
}
