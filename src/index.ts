import { registerPlugin } from '@capacitor/core';

import type { BiometricsStatePlugin } from './definitions';

const BiometricsState = registerPlugin<BiometricsStatePlugin>('BiometricsState', {
  web: () => import('./web').then(m => new m.BiometricsStateWeb()),
});

export * from './definitions';
export { BiometricsState };
