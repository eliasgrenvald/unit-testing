import { Feature, Point } from 'geojson';
import { SelectMapFeature } from '../actions';
import { reducer, initialState } from './map.reducer';

describe('SelectMapFeature action', () => {
	test('should set selectedFeature', () => {
		const point = <Feature<Point>>{
			type: 'Feature',
			geometry:
				{
					type: 'Point',
					coordinates:
						[
							10.263290405273438,
							56.17155205794858
						]
				}
		};

		const action = new SelectMapFeature(point);
		const result = reducer(initialState, action);

		expect(result).toMatchSnapshot();
	});
});