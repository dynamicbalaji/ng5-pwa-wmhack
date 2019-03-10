/**
 * Created By : Infosys Walmart Account
 */

 import { Component, OnInit } from '@angular/core';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { StudentService } from '../../../services/student/student.service';
 import { routerTransition } from '../../../services/config/config.service';

 @Component({
 	selector: 'app-student-list',
 	templateUrl: './student-list.component.html',
 	styleUrls: ['./student-list.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class RescheduleComponent implements OnInit {
 	studentList:any;
 	studentListData:any;
 	constructor(private studentService:StudentService,private toastr: ToastrService) { }
 	// Call student list function on page load 
 	ngOnInit() {
 		this.getStudentList();
 	}

 	// Get student list from services
 	getStudentList(){
 		let studentList = this.studentService.getAllStudents();
 		this.success(studentList)
 	}

 	// Get student list success
 	success(data){
		 this.studentListData = data.data;
 		for (var i = 0; i < this.studentListData.length; i++) {
 			this.studentListData[i].name = this.studentListData[i].first_name +' '+ this.studentListData[i].last_name;
 		}
 	}

 	// Delete a student with its index
 	deleteStudent(index:number){
 		// get confirm box for confirmation
 		let r = confirm("Are you sure to reject the iTravel request?");
 		if (r == true) {
 			let studentDelete = this.studentService.deleteStudent(index);
 			if(studentDelete) {
 				this.toastr.success("Success", "iTravel Request Rejected");
 			} 
 			this.getStudentList();
 		}
 	}

 	// Approve a request with its index
 	approveRequest(index:number){
 		// get confirm box for confirmation
 		//let r = confirm("Do you want to Reschedule the iTravel request?");
 		
 	}
 }
/**
 * Created By : Infosys Walmart Account
 */