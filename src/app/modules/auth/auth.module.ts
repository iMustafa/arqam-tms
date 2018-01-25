import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ROUTES } from './auth.router'

import { SharedModule } from '../shared/shared.module'
import { AppMaterialModule } from '../material/material.module'

import { LoginComponent } from './components/login/login.component'
import { LoggingInSnackBar } from './components/login/login.component'
import { LoggedInSnackBar } from './components/login/login.component'

@NgModule({
	declarations: [
		LoginComponent,
		LoggingInSnackBar,
		LoggedInSnackBar
	],
	entryComponents: [
		LoggingInSnackBar,
		LoggedInSnackBar
	],
	imports: [
		CommonModule,
		SharedModule,
		AppMaterialModule,
		RouterModule.forChild(ROUTES)
	],
	providers: [],
	bootstrap: []
})
export class AuthModule {

}