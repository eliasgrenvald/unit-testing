import { Observable, of } from 'rxjs';
import { Feature, Point } from 'geojson';
import { Injectable } from '@angular/core';

@Injectable()
export class MarkersService {
	public load(): Observable<ReadonlyArray<Feature<Point>>> {
		return of([				{
			type: "Feature",
			geometry: { type: "Point", coordinates: [10.240631103515625, 56.171074228546814] }
		},
		{
			type: "Feature",
			geometry: { type: "Point", coordinates: [10.263290405273438, 56.17155205794858] }
		},
		{
			type: "Feature",
			geometry: { type: "Point", coordinates: [10.268011093139648, 56.15601955845233] }
		}]);
	}
}
