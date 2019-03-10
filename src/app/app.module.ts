import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import {MaterialModule} from './material.module';

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';
import { NotifyService } from './services/notify/notify.service';

// Pipes

import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { StudentListComponent } from './components/student/list/student-list.component';
import { StudentDetailsComponent } from './components/student/details/student-details.component';
import { StudentAddComponent } from './components/student/add/student-add.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightStudentDirective } from './directives/highlight-student.directive';
import { DomesticTravelComponent } from './components/domestic-travel/domestic-travel.component';
import { AccomodationComponent } from './components/accomodation/accomodation.component';
import { EligibilityComponent } from './components/eligibility/eligibility.component';
import { BilluploadComponent } from './components/bill-upload/bill-upload.component';
import { TeamComponent } from './components/team/team.component';

import { NotificationsComponent } from './components/notifications/notifications.component';
import { TaxiComponent } from './components/taxi/taxi.component';
import { DcCardComponent } from './components/dc-card/dc-card.component';
import {ConsolidatedViewComponent} from './components/consolidated-view/consolidated-view.component';
import { FilterPipe,FilterPipeNotification } from './pipes/filter.pipe';
import {SosComponent,DialogOverviewExampleDialog} from './components/sos/sos.component';
import {AccomodationReComponent} from  './components/Rescheduling/accomodation-resched/accomodation.component';
import {DomesticTravelReComponent} from  './components/Rescheduling/domestic-travel-resched/domestic-travel.component';
import {RescheduleComponent} from './components/Rescheduling/reschedule/student-list.component';
import {TaxiReComponent} from './components/Rescheduling/taxi-resched/taxi.component';
import {PreferencesComponent} from './components/preferences/preferences.component';

// Parent Routes
const routes : Routes = [
{
	path: '',
	component: HomeComponent,
	children :homeChildRoutes,
	canActivate : [AuthService]
},
{
	path: 'login',
	component: LoginComponent
},  
{
	path: '**',
	redirectTo: ''
}
];

@NgModule({
	declarations: [
	AppComponent,
	StudentListComponent,
	StudentDetailsComponent,
	StudentAddComponent,
	LoginComponent,
	HomeComponent,
	FilterPipe,
	FilterPipeNotification,
	PhonePipe,
	HighlightStudentDirective,
	DomesticTravelComponent,
	AccomodationComponent,
	EligibilityComponent,
	BilluploadComponent,
	NotificationsComponent,
	TaxiComponent,
	DcCardComponent,
	ConsolidatedViewComponent,
	SosComponent,
	DialogOverviewExampleDialog,
	DomesticTravelReComponent,
	TaxiReComponent,
	AccomodationReComponent,
	RescheduleComponent,
	TeamComponent,
	PreferencesComponent
	],
	imports: [
BrowserModule,
	RouterModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	HttpClientModule,
	MaterialModule,
	ToastrModule.forRoot({ 
		timeOut: 3000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,
	}),
	],
	providers: [AuthService,UserService,StudentService, NotifyService],
	bootstrap: [AppComponent],
	entryComponents:[DialogOverviewExampleDialog]
})

// enableProdMode();

export class AppModule { }
