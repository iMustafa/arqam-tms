import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ROUTES } from './dashboard.router'

import { SharedModule } from '../shared/shared.module'
import { AppMaterialModule } from '../material/material.module'

import { DashboardComponent } from './bootstrap/dashboard.component'
import { TasksComponent } from './components/tasks/tasks.component'
import { WeeklyScheduleComponent } from './components/weekly-schedule/weekly-schedule.component'

import { FilterBarPartial } from './partials/filter-bar/filter-bar.partial'

import { AddTaskDialog } from './dialogs/add-task/add-task.dialog'

@NgModule({
	declarations: [
		TasksComponent,
		WeeklyScheduleComponent,
		DashboardComponent,
		AddTaskDialog,
		FilterBarPartial
	],
	entryComponents: [
		AddTaskDialog
	],
	imports: [
		CommonModule,
		SharedModule,
		AppMaterialModule,
		RouterModule.forChild(ROUTES)
	],
	providers: [],
	bootstrap: [DashboardComponent]
})
export class DashboardModule {

}