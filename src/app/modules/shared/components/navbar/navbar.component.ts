import { Component, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
	selector: 'default-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
	providers: []
})
export class NavbarComponent {
	@ViewChild('sidenav') sidenav: MatSidenav

	constructor(public router: Router) {}

	toggleNav($state) {
		this.sidenav ? this.sidenav.open() : this.sidenav.close()
	}

	showNav() {
		// Simple Garbage Login Check Whatever
		return this.router.url.includes('auth') ? false : true
	}

}
