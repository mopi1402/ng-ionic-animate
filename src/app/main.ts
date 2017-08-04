import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'web-animations-js/web-animations.min'; // need this for animations to work in safari

platformBrowserDynamic().bootstrapModule(AppModule);
