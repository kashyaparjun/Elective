import { Component, OnInit } from '@angular/core';
import { HttpProv } from '../providers/http.provider';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  email: string;
  reg: string;
  constructor(private http: HttpProv, private router: Router) { 
    if(!this.http.login){
      this.router.navigateByUrl('login');
    }
    this.email = this.http.email;
    this.reg = this.http.reg;
  }

  ngOnInit() {
  }

}
