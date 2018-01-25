import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { animation } from '@angular/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule, Http } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.router'

import { AppComponent } from './bootstrap/app.component'
import { AppMaterialModule } from './modules/material/material.module'
import { SharedModule } from './modules/shared/shared.module'

@NgModule({
	imports: [
		BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
		RouterModule.forRoot(ROUTES),
		
		AppMaterialModule,
		SharedModule,
  ],
	declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
