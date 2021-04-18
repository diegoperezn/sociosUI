import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sidenav>
      <router-outlet></router-outlet>
    </app-sidenav>
  `,
})
export class AppComponent {
 
  title = 'socios';

}
