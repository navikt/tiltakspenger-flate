/* tslint:disable */
/* eslint-disable */
/**
 * Vedtak API
 * API for vedtak
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Vilkarsvurdering } from './Vilkarsvurdering';
import {
    VilkarsvurderingFromJSON,
    VilkarsvurderingFromJSONTyped,
    VilkarsvurderingToJSON,
} from './Vilkarsvurdering';

/**
 * 
 * @export
 * @interface VilkarsVurderingsKategori
 */
export interface VilkarsVurderingsKategori {
    /**
     * 
     * @type {string}
     * @memberof VilkarsVurderingsKategori
     */
    tittel: string;
    /**
     * 
     * @type {string}
     * @memberof VilkarsVurderingsKategori
     */
    utfall: VilkarsVurderingsKategoriUtfallEnum;
    /**
     * 
     * @type {Array<Vilkarsvurdering>}
     * @memberof VilkarsVurderingsKategori
     */
    vilkårsvurderinger: Array<Vilkarsvurdering>;
}


/**
 * @export
 */
export const VilkarsVurderingsKategoriUtfallEnum = {
    Oppfylt: 'Oppfylt',
    Uavklart: 'Uavklart',
    IkkeOppfylt: 'IkkeOppfylt'
} as const;
export type VilkarsVurderingsKategoriUtfallEnum = typeof VilkarsVurderingsKategoriUtfallEnum[keyof typeof VilkarsVurderingsKategoriUtfallEnum];


/**
 * Check if a given object implements the VilkarsVurderingsKategori interface.
 */
export function instanceOfVilkarsVurderingsKategori(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tittel" in value;
    isInstance = isInstance && "utfall" in value;
    isInstance = isInstance && "vilkårsvurderinger" in value;

    return isInstance;
}

export function VilkarsVurderingsKategoriFromJSON(json: any): VilkarsVurderingsKategori {
    return VilkarsVurderingsKategoriFromJSONTyped(json, false);
}

export function VilkarsVurderingsKategoriFromJSONTyped(json: any, ignoreDiscriminator: boolean): VilkarsVurderingsKategori {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tittel': json['tittel'],
        'utfall': json['utfall'],
        'vilkårsvurderinger': ((json['vilkårsvurderinger'] as Array<any>).map(VilkarsvurderingFromJSON)),
    };
}

export function VilkarsVurderingsKategoriToJSON(value?: VilkarsVurderingsKategori | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tittel': value.tittel,
        'utfall': value.utfall,
        'vilkårsvurderinger': ((value.vilkårsvurderinger as Array<any>).map(VilkarsvurderingToJSON)),
    };
}

