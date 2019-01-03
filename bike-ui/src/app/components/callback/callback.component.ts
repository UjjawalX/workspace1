import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  template: `
    <div class="container">
    <p>
      Logging in !
    </p>
    </div>
  `,
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
