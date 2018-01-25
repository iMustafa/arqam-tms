import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppMaterialModule } from '../material/material.module'

import { DateConvPipe } from './pipes/date-conv.pipe'

import { MatchHeightDirective } from './directives/match-height.directive'

import { NavbarComponent } from './components/navbar/navbar.component'
import { CenterNavComponent } from './components/navbar/layouts/center-nav.component'
import { RightNavComponent } from './components/navbar/layouts/right-nav.component'

@NgModule({
	imports: [
		CommonModule,
		AppMaterialModule
	],
	declarations: [
		NavbarComponent,
		CenterNavComponent,
		RightNavComponent,
		DateConvPipe,
		MatchHeightDirective
	],
	exports: [
		CommonModule,
		NavbarComponent,
		DateConvPipe,
		MatchHeightDirective
	]
})
export class SharedModule {

}