import { Component, OnInit, ViewChild, Input } from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
	selector: 'filter-bar',
	templateUrl: './filter-bar.partial.html',
	styleUrls: ['./filter-bar.partial.css'],
	animations: [
		trigger('toggle', [
			state('open', style({ height: 'auto', padding: '20px 15px' })),
			state('closed', style({ height: '0px', padding: '0' })),
			transition('open <=> closed', animate('200ms ease-out'))
		])
	]
})
export class FilterBarPartial implements OnInit {
	@ViewChild('keyword') keyWord
	@Input() show: number
	private showThirdColumn: boolean

	constructor() { }

	private filterCollectors($keyword) {
		$keyword ? this.filteredCollectors = this.collectors.filter(collector => collector.name.startsWith($keyword)) : this.filteredCollectors = this.collectors
	}

	private filterDevices($keyword) {
		$keyword ? this.filteredDevices = this.devices.filter(device => device.number == $keyword) : this.filteredDevices = this.devices
	}

	private showFilters() {
		this.keyWord.nativeElement.blur()
		this.state = (this.state == "open") ? "closed" : "open"
	}

	private state: string = "closed"
	private devices: any = [
		{ name: "Device 0", number: 0 },
		{ name: "Device 1", number: 1 },
		{ name: "Device 2", number: 2 },
		{ name: "Device 3", number: 3 },
		{ name: "Device 4", number: 4 },
		{ name: "Device 5", number: 5 }
	]
	private collectors: any = [
		{ name: "Mustafa Ahmed" },
		{ name: "Ali El-Fakhrany" },
		{ name: "Eslam Saber" }
	]

	private filteredCollectors: any = []
	private filteredDevices: any = []

	ngOnInit() {
		this.showThirdColumn = (this.show === 3) ? true : false
		this.filteredCollectors = this.collectors
		this.filteredDevices = this.devices
	}

}