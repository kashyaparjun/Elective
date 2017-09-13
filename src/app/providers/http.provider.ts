import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpProv {
    login = false;
    email: string;
    reg: string;
    constructor (private http: Http) {}
    mailOTP(email): Observable<any>{
        var sender = {
            'email': email
        };
        var url = 'localhost:8080/otp'
        return this.http.post(url, sender);
    }
}