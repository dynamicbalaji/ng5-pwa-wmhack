/**
 * Created By : Infosys Walmart Account
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Integrated iTravel System';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 12345,
		first_name : "Ram",
		last_name : "Kumar",
		email : "ramkumar@infosys.com",
		phone : 132456,
		project : "WMHB3459",
		reqType: "Accommodation"
	},
	{
		id : 23456,
		first_name : "Rajesh",
		last_name : "MS",
		email : "rajesh_ms@infosys.com",
		phone : 576434,
		project : "WMHB3459",
		reqType: "Local Taxi"
	},
	{
		id : 56789,
		first_name : "Vincent",
		last_name : "Raj",
		email : "vincent_raj@infosys.com",
		phone : 742356,
		project : "WMHB3459",
		reqType: "Domestic"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}

/**
 * Created By : Infosys Walmart Account
 */
