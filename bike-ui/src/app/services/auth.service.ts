import { Injectable } from "@angular/core";
import * as auth0 from "auth0-js";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
 auth0 = new auth0.WebAuth({
     clientId: 'qJSJRQhzATgM38TVePO1OZojg76ClLbn',
     domain: 'besra.auth0.com',
     responseType: '',
     audience: 'http://localhost:8080/',
     redirectUri: 'http://localhost:4200/callback',
     scope: 'bike:regirstration bike:registrations'
 });
 constructor(public router: Router){

 }

 public login(): void {
    this.auth0.parseHash((err,authResult) => {
        if(authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            this.setSession(authResult);
            this.router.navigate(['/admin']);
        } else if(err){
            this.router.navigate(['/admin']);
            console.log(err);
        }
    });
 }

 private setSession(authResult): void {
     const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new  Date().getTime());
     localStorage.setItem('access_Token',authResult.access_Token);
     localStorage.setItem('id_token',authResult.idToken);
     localStorage.setItem('expires_at',expiresAt);
 }

 public logout(): void{
     localStorage.removeItem('accessToken');
     localStorage.removeItem('id_token');
     localStorage.removeItem('expires_at');
     this.router.navigate(['/']);
 }

 public isAuthenticated():boolean {
     const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
     return new Date().getTime() < expiresAt;
 }

}