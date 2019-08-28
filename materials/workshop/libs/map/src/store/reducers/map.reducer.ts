// features
import * as fromMapActions from '../actions';
import { Feature, Point } from 'geojson';

/**
 * Represents a map state object.
 */
export interface IMapState {
	/**
	 * The selected feature.
	 */
	readonly selectedFeature: Feature<Point>;

	/**
	 * The features.
	 */
	readonly features: ReadonlyArray<Feature<Point>>;
}

/**
 * The initial state of map.
 */
export const initialState: IMapState = {
	selectedFeature: null,
	features: []
};

/**
 * Mutates the map state with the given action.
 * @param state The map state.
 * @param action The action to mutate the state.
 * @returns Mutated state with the given action.
 */
export function reducer(state = initialState, action: fromMapActions.MapAction): IMapState {
	switch (action.type) {
		case fromMapActions.SELECT_MAP_FEATURE: {
			return {
				...state,
				selectedFeature: action.payload
			};
		}
	}

	return state;
}

export const getSelectedFeature = (state: IMapState) => state.selectedFeature;
