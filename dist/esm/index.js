import { registerPlugin } from '@capacitor/core';
const BiometricsState = registerPlugin('BiometricsState', {
    web: () => import('./web').then(m => new m.BiometricsStateWeb()),
});
export * from './definitions';
export { BiometricsState };
//# sourceMappingURL=index.js.map