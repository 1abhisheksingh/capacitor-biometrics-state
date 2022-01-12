var capacitorBiometricsState = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
