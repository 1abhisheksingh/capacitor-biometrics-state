export interface BiometricsStatePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
