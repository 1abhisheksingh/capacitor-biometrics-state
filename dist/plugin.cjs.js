'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const BiometricsState = core.registerPlugin('BiometricsState', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BiometricsStateWeb()),
});

class BiometricsStateWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BiometricsStateWeb: BiometricsStateWeb
});

exports.BiometricsState = BiometricsState;
//# sourceMappingURL=plugin.cjs.js.map
