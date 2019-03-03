import { Injectable } from "@angular/core";
import * as auth0 from "auth0-js";
import { Router } from "@angular/router";

const ACCESS_TOKEN = 'access_Token';
const ID_TOKEN = 'id_token';
const EXPIRES_AT = 'expires_at';
@Injectable()
export class AuthService {
 auth0 = new auth0.WebAuth({
     clientID: '7b95oepCdT7jeLtZUPPGYu8cIZFpa5BW',
     domain: 'besrau.auth0.com',
     responseType: 'token id_token',
     audience: 'http://localhost:8081',
     redirectUri: 'http://localhost:4200/callback',
     scope: 'openid view:registration view:registrations'
 });
 constructor(public router: Router){

 }
 public login(): void {
     this.auth0.authorize();
 }

 public handleAuthentication(): void {
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
     localStorage.setItem(ACCESS_TOKEN,authResult.accessToken);
     localStorage.setItem(ID_TOKEN,authResult.idToken);
     localStorage.setItem(EXPIRES_AT,expiresAt);
 }

 public logout(): void{
     localStorage.removeItem(ACCESS_TOKEN);
     localStorage.removeItem(ID_TOKEN);
     localStorage.removeItem(EXPIRES_AT);
     this.router.navigate(['/']);
 }

 public isAuthenticated():boolean {
     const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
     return new Date().getTime() < expiresAt;
 }

}