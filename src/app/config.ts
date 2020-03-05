import { InjectionToken } from "@angular/core"

export interface AppConfig{
    apiUrl: string;
    coourseCacheSize: number;

}

export const APP_CONFIG = {
    apiUrl: 'http://localhost:9000',
    coourseCacheSize:10
}

export const CONFIG_TOKEN = new InjectionToken<AppConfig>('CONFIG_TOKEN');