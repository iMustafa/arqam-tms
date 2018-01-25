import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material'

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	constructor(private snackBar: MatSnackBar, private router: Router) {

	}

	login() {
		this.snackBar.openFromComponent(LoggingInSnackBar)

		setTimeout(() => {
			this.snackBar.dismiss()
			this.snackBar.openFromComponent(LoggedInSnackBar)
		}, 1000)

		setTimeout(() => {
			this.snackBar.dismiss()
			this.router.navigate(['/dashboard/tasks'])
		}, 1500)

	}
}

@Component({
	template: `<span>Logging In</span><mat-spinner diameter='25'></mat-spinner><div class='clearfix'></div>`,
	styles: ['mat-spinner {float: right}']
})
export class LoggingInSnackBar { }

@Component({
	template: `<span>Logged In</span><mat-icon>check_circle</mat-icon><div class='clearfix'></div>`,
	styles: ['mat-icon {float: right; color: #0F0}']
})
export class LoggedInSnackBar { }