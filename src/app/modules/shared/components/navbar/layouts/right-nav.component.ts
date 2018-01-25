import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { NavbarComponent } from '../navbar.component'

@Component({
	selector: 'nav-right',
	template: `
		<ul class="nav navbar-form navbar-right">
			<div class="col-xs-3">
				<button mat-icon-button matTooltip='Notifications'>
					<mat-icon>notifications</mat-icon>
				</button>
			</div>
			<div class="col-xs-3">
				<button mat-icon-button matTooltip='Profile'>
					<mat-icon>account_circle</mat-icon>
				</button>
			</div>
			<div class="col-xs-3">
				<button mat-icon-button matTooltip='Settings'>
					<mat-icon>settings</mat-icon>
				</button>
			</div>
			<div class="col-xs-3">
				<button mat-icon-button matTooltip='Logout' (click)="logout()">
					<mat-icon>exit_to_app</mat-icon>
				</button>
			</div>
		</ul>
	`,
	styles: [
		'.navbar-right > div.col-xs-3 { padding: 0 5px }'
	]
})
export class RightNavComponent{

	constructor(private router: Router, private navbar: NavbarComponent) { }

	goto($link) {
		this.navbar.sidenav.close()
		this.router.navigate([$link])
	}

	logout() {
		this.navbar.sidenav.close()
		this.router.navigate(['/auth/login'])
	}

}