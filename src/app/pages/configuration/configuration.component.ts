import { Component } from '@angular/core';

@Component({
  selector: 'configuration-list',
  template: `
      <div layout="row" layout-xs="column">
          <div flex>
            I'm above on mobile, and to the left on larger devices.
          </div>
          <div flex>
            I'm below on mobile, and to the right on larger devices.
          </div>
        </div>

        <div layout="row" layout-wrap>
        <div flex="80">80%</div>
        <div flex="20">20%</div>
    </div>
  `,
  styles: ['']
})
export class ConfiguracionComponent {
  title = 'socios';
}