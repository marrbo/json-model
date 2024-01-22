import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { JsonModel } from '../../marrbo/json-model/src/public-api';
import * as ConfigDebug from './assets/config.debug.json';
import * as Config from './assets/config.json';
import { environment } from './environments/environment';

const _settings = JsonModel(environment, Config, ConfigDebug);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
