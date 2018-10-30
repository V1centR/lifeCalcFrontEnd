import { Component,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  
  template: `<app-menu-bar></app-menu-bar><app-menu-interno></app-menu-interno><router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  
}
