import { Component, OnInit } from '@angular/core';

import './webcomponents/user-list/user-list';
import './webcomponents/user-detail/user-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor() {
    console.log('AppComponent constructor');
  }

  ngOnInit(): void {
    console.log('AppComponent init');
  }
}
