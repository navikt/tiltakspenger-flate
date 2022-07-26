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
import type { Barn } from './Barn';
import {
    BarnFromJSON,
    BarnFromJSONTyped,
    BarnToJSON,
} from './Barn';

/**
 * 
 * @export
 * @interface Personalia
 */
export interface Personalia {
    /**
     * 
     * @type {Array<Barn>}
     * @memberof Personalia
     */
    barn: Array<Barn>;
    /**
     * 
     * @type {string}
     * @memberof Personalia
     */
    etternavn: string;
    /**
     * 
     * @type {string}
     * @memberof Personalia
     */
    fornavn: string;
    /**
     * 
     * @type {string}
     * @memberof Personalia
     */
    ident: string;
}

/**
 * Check if a given object implements the Personalia interface.
 */
export function instanceOfPersonalia(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "barn" in value;
    isInstance = isInstance && "etternavn" in value;
    isInstance = isInstance && "fornavn" in value;
    isInstance = isInstance && "ident" in value;

    return isInstance;
}

export function PersonaliaFromJSON(json: any): Personalia {
    return PersonaliaFromJSONTyped(json, false);
}

export function PersonaliaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Personalia {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'barn': ((json['barn'] as Array<any>).map(BarnFromJSON)),
        'etternavn': json['etternavn'],
        'fornavn': json['fornavn'],
        'ident': json['ident'],
    };
}

export function PersonaliaToJSON(value?: Personalia | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'barn': ((value.barn as Array<any>).map(BarnToJSON)),
        'etternavn': value.etternavn,
        'fornavn': value.fornavn,
        'ident': value.ident,
    };
}
