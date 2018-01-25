import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDatepickerInputEvent } from '@angular/material/datepicker'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { AddTaskDialog } from '../../dialogs/add-task/add-task.dialog'

@Component({
	selector: 'tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	@ViewChild('dateText') dateText

	private columns: number = 3
	private date: string = new Date().toDateString()

	constructor(public dialog: MatDialog) {}

	private change(event: MatDatepickerInputEvent<Date>) {
		this.date = event.value.toDateString()
		this.showDateString()
	}

	ngOnInit() {
		this.showDateString()
	}

	private showDateString() {
		return this.dateText.nativeElement.innerHTML.match(/^(Today|Yesterday|Tomorrow)$/) ? true : false
	}

	private openAddTaskDialog() {
		let dialogRef = this.dialog.open(AddTaskDialog, {
      width: '800px'
    });
	}

	private filter($keyword) {
		console.log($keyword)
	}

}