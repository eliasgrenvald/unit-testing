import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature, Point } from 'geojson';
import { Injectable } from '@angular/core';

@Injectable()
export class MarkersService {
	public constructor(private http: HttpClient) {}

	public load(): Observable<ReadonlyArray<Feature<Point>>> {
		return this.http.get<ReadonlyArray<Feature<Point>>>('api/v1/marders', {params: { country: 'dk' }});
	}
}
