import { Routes } from '@angular/router'

export const ROUTES: Routes = [
	{ path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
	{ path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' }
]