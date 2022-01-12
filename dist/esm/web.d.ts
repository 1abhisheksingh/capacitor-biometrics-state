import { WebPlugin } from '@capacitor/core';
import type { BiometricsStatePlugin } from './definitions';
export declare class BiometricsStateWeb extends WebPlugin implements BiometricsStatePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
