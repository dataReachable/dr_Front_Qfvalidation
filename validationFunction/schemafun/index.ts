/**
 * @file this file is validation function
 * @date 2020-10-01
 * @author Frank
 * @lastModify Frank 2020-10-01
 */
import {
  numberType,
  numberMinLength,
  numberMaxLength,
  numberMix,
} from "./schema/number";

import {
  stringType,
  stringLowerCase,
  stringUpperCase,
  stringMix,
  stringEmail,
  stringMinLength,
  stringMaxLength,
} from "./schema/string";
/**
 * This is function is mainly using to define the validation function .
 * @param {string} value  the value need to be validated.
 */
export const validationFunc: any = {
  /* <------------------------------------ **** number validation START **** ------------------------------------ */
  number: {
    type: (value: string): boolean => {
      return numberType(value);
    },
    minLength: (value: string, length: number): boolean => {
      return numberMinLength(value, length);
    },
    maxLength: (value: string, length: number): boolean => {
      return numberMaxLength(value, length);
    },
    mix: (value: string, mix: RegExp): boolean => {
      return numberMix(value, mix);
    },
  },
  /* <------------------------------------ **** number validation END **** ------------------------------------ */
  /* <------------------------------------ **** string validation START **** ------------------------------------ */
  string: {
    type: (value: string): boolean => {
      return stringType(value);
    },
    minLength: (value: string, length: number): boolean => {
      return stringMinLength(value, length);
    },
    maxLength: (value: string, length: number): boolean => {
      return stringMaxLength(value, length);
    },
    lowerCase: (value: string): boolean => {
      return stringLowerCase(value);
    },
    upperCase: (value: string): boolean => {
      return stringUpperCase(value);
    },
    emial: (value: string): boolean => {
      return stringEmail(value);
    },
    mix: (value: string, mix: RegExp): boolean => {
      return stringMix(value, mix);
    },
  },
  /* <------------------------------------ **** string validation END **** ------------------------------------ */
};
