import { hasValue } from './json-model.service';

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