/**
 * Created By : Infosys Walmart Account
 */

import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

	constructor() { }

	doLogin(data){
		if (data.email == "walmart@infosys.com" && data.password == "admin123") {
			return {
				code : 200,
				message : "Login Successful",
				data : data
			};
		}else{
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