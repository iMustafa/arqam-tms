import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
	 MatButtonModule,
	 MatDatepickerModule,
	 MatFormFieldModule,
	 MatSelectModule,
	 MatSidenavModule,
	 MatIconModule,
	 MatSnackBarModule,
	 MatProgressSpinnerModule,
	 MatTooltipModule,
	 MatToolbarModule,
	 MatCardModule,
	 MatInputModule,
	 MatNativeDateModule,
	 MatSlideToggleModule,
	 MatCheckboxModule,
	 MatDialogModule,
	 MatMenuModule
	} from '@angular/material'

@NgModule({
  declarations: [
		
	],
  imports: [
		CommonModule,
		MatButtonModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatSelectModule,
		MatSidenavModule,
		MatIconModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
		MatToolbarModule,
		MatCardModule,
		MatInputModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatDialogModule,
		MatMenuModule
	],
	exports: [
		MatButtonModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatSelectModule,
		MatSidenavModule,
		MatIconModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
		MatToolbarModule,
		MatCardModule,
		MatInputModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatDialogModule,
		MatMenuModule
	],
  providers: [],
  bootstrap: []
})
export class AppMaterialModule {

}