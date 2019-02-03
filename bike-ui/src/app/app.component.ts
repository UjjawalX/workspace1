import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
   <div>
    <h1>Biker gang coporation</h1>
   </div>
   <router-outlet></router-outlet>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bike-ui';
  constructor(private authService:AuthService){
    authService.handleAuthentication();
  }
}
