import { Feature, Point } from 'geojson';
import { SelectMapFeature } from './map.action';

describe('SelectMapFeature action', () => {
	test('should set the payload', () => {
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

		expect(action.payload).toMatchSnapshot();
	});
});
