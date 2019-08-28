import { Action } from '@ngrx/store';
import { Feature, Point } from 'geojson';

export const SELECT_MAP_FEATURE = '[Testing Workshop] Select A Map Feature';
export const LOAD_MAP_FEATURES = '[Testing Workshop] Load Map Features';
export const LOAD_MAP_FEATURES_SUCCESS = '[Testing Workshop] Load Map Features Succeed';


export class SelectMapFeature implements Action {
	public readonly type = SELECT_MAP_FEATURE;
	public constructor(public readonly payload: Feature<Point>) {}
}

export class LoadMapFeatures implements Action {
	public readonly type = LOAD_MAP_FEATURES;
	public constructor() {}
}

export class LoadMapFeaturesSuccess implements Action {
	public readonly type = LOAD_MAP_FEATURES_SUCCESS;
	public constructor(public readonly payload: ReadonlyArray<Feature<Point>>) {}
}

export type MapAction =
	| SelectMapFeature
	| LoadMapFeatures
	| LoadMapFeaturesSuccess;
