import { Component } from '@angular/core';

@Component({
  selector: 'configuration-list',
  template: `
<div>
  <!-- The following menu items will be hidden on both SM and XS screen sizes -->
  <div >
     <a href="#" mat-button>Align left</a>
     <a href="#" mat-button>Align left</a>
  </div>
  <div  >
     <a href="#" mat-button>Align center</a>
     <a href="#" mat-button>Align center</a>
  </div>
  <div  >
     <a href="#" mat-button>Align right</a>
     <a href="#" mat-button>Align right</a>
  </div>
</div>
  `,
  styles: ['']
})
export class ConfiguracionComponent {
  title = 'socios';
}