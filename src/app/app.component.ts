import { Component } from '@angular/core';

import './webcomponents/user-list/user-list';
import './webcomponents/user-detail/user-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: String = 'User list made with native Web Components and Angular';

  constructor() {}
}
