import { WebPlugin } from '@capacitor/core';

import type { BiometricsStatePlugin } from './definitions';

export class BiometricsStateWeb extends WebPlugin implements BiometricsStatePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
