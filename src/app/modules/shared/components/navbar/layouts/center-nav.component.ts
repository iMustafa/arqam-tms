import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { NavbarComponent } from '../navbar.component'

@Component({
	selector: 'nav-center',
	template: `
		<div class="navbar-form navbar-left">
			<button mat-button (click)="goto('/dashboard/tasks')">
				<mat-icon>playlist_add_check</mat-icon>
				<span class='button-text'>Tasks</span>
			</button>
			<button mat-button (click)="goto('/dashboard/weekly-schedule')">
				<mat-icon>date_range</mat-icon>
				<span class='button-text'>Weekly Schedule</span>
			</button>
		</div>
	`,
	styles: [
		`.navbar-left button span {
			display: inline-block;
			padding: 3px 0 0 5px;
			font-family: 'Roboto','Helvetica Neue',sans-serif;
			font-size: 14px;
			font-weight: 500;
		}`
	]
})
export class CenterNavComponent {

	constructor(private router: Router, private navbar: NavbarComponent) { }

	goto($link) {
		this.navbar.sidenav.close()
		this.router.navigate([$link])
	}

}