import '@oddbird/popover-polyfill';
import '@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { setup } from '@sl-design-system/bingel-int';

import '@sl-design-system/inline-message/register.js';

bootstrapApplication(AppComponent);

setup();
