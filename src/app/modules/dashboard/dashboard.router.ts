import { Routes } from '@angular/router'

import { DashboardComponent } from './bootstrap/dashboard.component'
import { TasksComponent } from './components/tasks/tasks.component'
import { WeeklyScheduleComponent } from './components/weekly-schedule/weekly-schedule.component'

export const ROUTES: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'tasks', component: TasksComponent },
	{ path: 'weekly-schedule', component: WeeklyScheduleComponent }
]