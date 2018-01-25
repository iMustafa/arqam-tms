import { Component, ViewChild } from '@angular/core'
import { NavbarComponent } from '../modules/shared/components/navbar/navbar.component'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	@ViewChild(NavbarComponent) navbar: NavbarComponent

	closeNav() {
		this.navbar.sidenav.opened ? this.navbar.toggleNav(false) : false
	}

}
