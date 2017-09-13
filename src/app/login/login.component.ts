import { Component, OnInit } from '@angular/core';
import { HttpProv } from '../providers/http.provider';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  reg: string;
  otp = true;
  oneTime: string;

  constructor(private http: HttpProv, private router: Router) { }

  ngOnInit() {
  }

  getOTP(){
    console.log("OTP");
    console.log(this.email);
    console.log(this.reg);
    if(this.email == null || this.reg == null){
      alert('Please enter the details');
      return;
    }
    else{
      this.otp = false;
    } 
  }

  checkOTP(){
    console.log(this.oneTime);
    if(this.oneTime == null){
      alert('Please Enter OTP');
      return;
    }
    else{
      this.http.login = true;
      this.http.email = this.email;
      this.http.reg = this.reg;
      this.http.mailOTP(this.email).subscribe(res => {
        console.log(res.json());
      });
      this.router.navigateByUrl('selection');
    }
  }

}
