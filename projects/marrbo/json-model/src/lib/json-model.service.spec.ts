import { TestBed } from '@angular/core/testing';

import { JsonFileModule, JsonModel, hasValue } from './json-model.service';

beforeEach(() => {
  TestBed.configureTestingModule({});
});

describe('hasValue', () => {

  it('Objetos não nulos, devem retornar: true', () => {
    const value1: string | undefined = 'test';
    const value2: number | null = 1;
    const value3: object | null = {};

    expect(hasValue(value1)).toBe(true);
    expect(hasValue(value2)).toBe(true);
    expect(hasValue(value3)).toBe(true);
  });

  it('Objetos nulos, devem retornar: false', () => {
    const value1: string | undefined = undefined;
    const value2: number | null = null;
    const value3: object | null = null;

    expect(hasValue(value1)).toBe(false);
    expect(hasValue(value2)).toBe(false);
    expect(hasValue(value3)).toBe(false);
  });
});


describe('JsonModel', () => {
  let environment: any;
  let config: any;
  let configDebug: any;
  let result: JsonFileModule;

  beforeEach(() => {
    environment = {
      production: false
    };
    config = {
      environment: {
        key1: 'value1'
      }
    };
    configDebug = {
      sentry: {
        dsn: 'https://example.com/123'
      }
    };
    result = JsonModel(environment, config, configDebug);
  });

  it('should return an object of type JsonFileModule', () => {
    expect(result).toBeInstanceOf(JsonFileModule);
  });

  it('should merge the contents of config and configDebug based on the value of environment.production', () => {
    expect(result.environment).toEqual({
      key1: 'value1'
    });
    expect(result.sentry).toEqual({
      dsn: 'https://example.com/123'
    });
  });

  it('should set the properties of environment to the values in the loaded JSON file', () => {
    expect(environment.key1).toEqual('value1');
  });

  it('should log a message to the console when environment.production is set to false', () => {
    expect(console.log).toHaveBeenCalledWith('environment atualizado:', JSON.stringify(environment));
  });
});