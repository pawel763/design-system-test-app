import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: [
    `
      :host {
        display: block;
        padding: 20px;
      }
    `,
  ],
  template: `
    <sl-inline-message variant="success">
      <span slot="title">title</span>
      test
      <span slot="details">details</span>
    </sl-inline-message>
  `,
})
export class AppComponent {}
