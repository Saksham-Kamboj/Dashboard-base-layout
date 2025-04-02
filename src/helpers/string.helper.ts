/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

import RegexLibrary from '@/library/regex.lib';

/**
 * This class holds `string` Helper
 */
export class StringHelper {
  /**
   * Accept a string and replace all *`%s`* with data
   * @param {string} value String Value to Replace data in
   * @param {string} optionalParams Replace values
   * @return {string} Data placed string
   */
  public static translationHelper(
    value: string,
    ...optionalParams: string[]
  ): string {
    let newString = value;
    for (let index = 0; index < optionalParams.length; index += 1) {
      const element = optionalParams[index];
      newString = newString.replace('%s', element);
    }

    return newString;
  }

  /**
   * Generate string  ,Take string and index ,merge with dash
   * @param {string} uid
   * @param {number} index
   * @return {string}
   */
  public static generateUID(uid: string, index: number): string {
    return `${uid}-${index}`;
  }

  /**
   * Find match in string
   * @param {string} value String in which we will find
   * @param {string} find String to find in value
   * @return {boolean}
   */
  public static hasMatch(value: string, find: string): boolean {
    return value.toLowerCase().includes(find.toLowerCase());
  }

  /**
   * Search for a String in Array
   * @param {T[]} array Array to perform search in
   * @param {string | number } find String to find in Array
   * @return {T[]}
   */
  public static findInArray<T>(array: T[], find: string | number): T[] {
    return _.filter<T>(array, (value: T) => {
      switch (typeof value) {
        case 'object':
          return this.searchObject(value as unknown as object, find as string);
        case 'string':
          if (typeof find === 'number') {
            return Number(value) === find;
          }
          return this.hasMatch(String(value), find as string);
        case 'number':
          return value === Number(find);
        default:
          if (Array.isArray(value)) {
            return this.findInArray(_.cloneDeep(value), find).length > 0;
          }
          return false;
      }
    });
  }

  /**
   * Search in Object
   * @param {object} obj Object to Search in
   * @param {string} find String to Search in Object
   * @return {boolean}
   */
  public static searchObject(obj: object, find: string): boolean {
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);

    let final = false;

    for (let i = 0; i < objKeys.length; i += 1) {
      const objValue = objValues[i];

      switch (typeof objValue) {
        case 'object':
          final = this.searchObject(_.cloneDeep(objValue), find);
          break;
        case 'string':
          if (this.hasMatch(String(objValue), find)) {
            final = true;
          }
          break;
        default:
          if (Array.isArray(objValue)) {
            final = this.findInArray(_.cloneDeep(objValue), find).length > 0;
          }
      }

      if (final) {
        break;
      }
    }

    return final;
  }

  /**
   * For check and return empty object
   * @param {T} initalValue
   * @return {object}
   */
  public static emptyObject<T = any>(initalValue: T): T {
    const keys = Object.keys(initalValue as object);
    const values = Object.values(initalValue as object);
    let obj = {};
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (typeof values[i] === 'string') {
        obj = { ...obj, [key]: '' };
      }
      if (Array.isArray(values[i])) {
        obj = { ...obj, [key]: [] };
      }
      if (typeof values[i] === 'object') {
        obj = { ...obj, [key]: values[i] };
      }
    }
    return obj as T;
  }

  /**
   * Convert a string with spaces to dash
   * @param {string} value String to generate ID from
   * @return {string} Generated ID
   */
  public static replaceSpaceToDash(value: string): string {
    return value.trim().replace(RegexLibrary.CONVERT_SPACE_TO_DASH, '-');
  }

  /**
   * Capitalize the text value
   * @param {string} value
   * @return {string}
   */
  public static capitalize(value: string): string {
    if (!value) {
      return '';
    }

    const lowercasedValue = value.trim().toLowerCase();
    const capitalizedValue =
      lowercasedValue.charAt(0).toUpperCase() + lowercasedValue.slice(1);

    return capitalizedValue;
  }

  /**
   * Get the Extension of the File from File Name
   * It may return undefined if filename dosent contain extension
   *
   * @param {string} fileName Name of the File
   * @return {string | undefined} File Extension or Undefined
   */
  public static getFileExtension(fileName: string): string | undefined {
    if (fileName.includes('.')) {
      return fileName.split('.').pop();
    }
    return '';
  }
}

export default StringHelper;
