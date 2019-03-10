/**
 * Created By : Infosys Walmart Account
 */

import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

	constructor() { }
	userType:string="";
	doLogin(data){
		if (data.email == "admin@infosys.com" && data.password == "admin123") {
			this.userType = 'admin';
			return {
				code : 200,
				message : "Login Successful",
				userType: this.userType,
				data : data
			};
		}
		else if (data.email == "associate@infosys.com" && data.password == "associate123") {
			this.userType = "associate";
			return {
				code : 200,
				message : "Login Successful",
				data : data,
				userType: this.userType,
			};
		}
		else if (data.email == "agent@infosys.com" && data.password == "agent123") {
			this.userType = "agent";
			return {
				code : 200,
				message : "Login Successful",
				data : data,
				userType: this.userType,
			};
		}else{
			this.userType = "";
			return {
				code : 503,
				message : "Invalid Credentials",
				data : null
			};
		}
	}

	// doRegister(data){
		// 	return this.http.post('user-add.php',data);	
		// }
	}

/**
 * Created By : Infosys Walmart Account
 */