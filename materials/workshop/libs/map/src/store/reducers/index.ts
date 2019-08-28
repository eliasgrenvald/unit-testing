// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

//app
import * as fromMap from './map.reducer';

/**
 * Representing a contract of map store object.
 */
export interface IMapStore {
	readonly map: fromMap.IMapState;
}

/**
 * The reducers of map store.
 */
export const mapReducers: ActionReducerMap<IMapStore> = {
	map: fromMap.reducer
};

export const getMapStore = createFeatureSelector<IMapStore>('map');
