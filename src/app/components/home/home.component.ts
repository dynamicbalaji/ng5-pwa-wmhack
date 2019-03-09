/**
 * Created By : Infosys Walmart Account
 */

 import { Component, OnInit } from '@angular/core';
 import { RouterModule, Routes ,Router} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 // Components
 import { StudentListComponent } from '../student/list/student-list.component';
 import { StudentDetailsComponent } from '../student/details/student-details.component';
 import { StudentAddComponent } from '../student/add/student-add.component';
import { DomesticTravelComponent } from '../domestic-travel/domestic-travel.component';
import { AccomodationComponent } from '../../components/accomodation/accomodation.component';
import { EligibilityComponent } from '../../components/eligibility/eligibility.component';
import { BilluploadComponent } from '../../components/bill-upload/bill-upload.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { TeamComponent } from '../../components/team/team.component';
 // Services
 import { routerTransition } from '../../services/config/config.service';
 import { TaxiComponent } from '../taxi/taxi.component';
 import { DcCardComponent } from '../dc-card/dc-card.component';
 import {ConsolidatedViewComponent} from '../consolidated-view/consolidated-view.component';
 import {SosComponent,DialogOverviewExampleDialog} from '../sos/sos.component';
 import {RescheduleComponent} from './../../components/Rescheduling/reschedule/student-list.component';
 import {AccomodationReComponent} from  './../../components/Rescheduling/accomodation-resched/accomodation.component';
import {DomesticTravelReComponent} from  './../../components/Rescheduling/domestic-travel-resched/domestic-travel.component';
import {TaxiReComponent} from './../../components/Rescheduling/taxi-resched/taxi.component';
 @Component({
 	selector: 'app-home',
 	templateUrl: './home.component.html',
 	styleUrls: ['./home.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })


 export class HomeComponent implements OnInit {
 	active:string;
 	constructor(private router: Router,private toastr: ToastrService) {
 		// Detect route changes for active sidebar menu
 		this.router.events.subscribe((val) => {
 			this.routeChanged(val);
 		});
 	}

 	ngOnInit() {
 	}

 	// Detect route changes for active sidebar menu
 	routeChanged(val){
 		this.active = val.url;
	 }
	 open(){
		document.getElementById("mySidebar").style.display = document.getElementById("mySidebar").style.display == "block"?"none":"block";
	 }

 	// Logout User
 	logOut(){
 		this.toastr.success('Success', "Logged Out Successfully");
 		localStorage.removeItem('userData');
 		this.router.navigate(['/login']);
 	}
 }


 // Define and export child routes of HomeComponent
 export const homeChildRoutes : Routes = [
 {
 	path: 'requests',
 	component: StudentListComponent
 },
 {
 	path: 'add',
 	component: StudentAddComponent
 },
 {
 	path: 'update/:id',
 	component: StudentAddComponent
 },
 {
 	path: 'detail/:id',
 	component: StudentDetailsComponent
 },
	{
		path:'',
		component:DomesticTravelComponent
	}
	, 
	{
		path:'accomodation',
		component:AccomodationComponent
	}, 
	{
		path:'eligibility',
		component:EligibilityComponent
	},
	{
		path:'notifications',
		component:NotificationsComponent
	}	, 
	{
		path:'hotel',
		component:AccomodationComponent
	},
	{
		path:'taxi',
		component:TaxiComponent
	},
	{
		path:'dcdetails',
		component:DcCardComponent
	},
	{
		path:'consolidated',
		component:ConsolidatedViewComponent
	},
	{
		path:'bills',
		component:BilluploadComponent
	}
	,
	{
		path:'sos',
		component:SosComponent
	}
	,
	{
		path:'team',
		component:TeamComponent
	},
	{
		path:'reschedule',
		component:RescheduleComponent
	},
	{
		path:'rescacc',
		component:AccomodationReComponent
	},
	{
		path:'rescInt',
		component:DomesticTravelReComponent
	},
	{
		path:'resctaxi',
		component:TaxiReComponent
	}
	,
 ];

/**
 * Created By : Infosys Walmart Account
 */
