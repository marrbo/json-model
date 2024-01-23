import { DOCUMENT } from '@angular/common';

/**
 * Checks if a value is not undefined or null
 * @param {T} value - the value to check
 * @returns {boolean} true if the value is defined and not null, false otherwise
 */
export function hasValue<T>(value: T): boolean {
  return value !== undefined && value !== null;
}

/**
* The interface for the JSON file modules
*/
export class JsonFileModule {
  environment?: { [key: string]: any };
  sentry?: any;
  [key: string]: any;
}

/**
* Loads the settings from the specified JSON file
* @param {Object} environment - the environment variables
* @param {JsonFileModule} Json - the JSON file module for production
* @param {JsonFileModule} JsonDev - the JSON file module for development
* @returns {JsonFileModule} the loaded settings
*/
export function JsonModel(environment: any, config: any, configDebug: any): JsonFileModule {
  type JsonModelSettings = typeof config | typeof configDebug;

  const dev = document.location.hostname === 'localhost' && environment.production === false;

  let _settings: JsonModelSettings = Object.assign(new JsonFileModule(), dev ? configDebug : config);
  
  Object.assign(environment, _settings?.environment);

  if (environment.production === false) {
    console.log('environment atualizado:', JSON.stringify(environment));
  }

  return _settings;
}