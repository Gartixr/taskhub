import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRouting } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    ...appRouting,
    ...appConfig.providers,
  ]
}).catch(err => {
  console.error('Error bootstrapping the application:', err);
});
