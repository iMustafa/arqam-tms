import { Component, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
	templateUrl: './add-task.dialog.html',
	styleUrls: ['./add-task.dialog.css']
})
export class AddTaskDialog {

	private columns: number = 2 
	constructor(
		public dialogRef: MatDialogRef<AddTaskDialog>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	onNoClick(): void {
		this.dialogRef.close();
	}
}