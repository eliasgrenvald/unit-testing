import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';
import { MapService } from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMapReducers from '@maersk-digital/root-features/map/store/reducers';
import * as fromMapEffects from '@maersk-digital/root-features/map/store/effects';

@NgModule({
	imports:
		[
			CommonModule,
			Angulartics2Module,
			StoreModule.forFeature('map', fromMapReducers.mapReducers),
			EffectsModule.forFeature([
				...fromMapEffects.MAP_EFFECTS
			])
		],
	providers:
		[
			MapService
		]
})
export class MapModule {}
