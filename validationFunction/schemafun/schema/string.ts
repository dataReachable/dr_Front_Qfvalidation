/**
 * @file this file will contain all the validation function with string
 * @date 2020-10-01
 * @author Frank
 * @lastModify Frank 2020-10-01
 */

/**
 * This function will check whether the value is string or not
 * @param {string} value the value will be checked
 */
export const stringType = (value: string): boolean => {
  const string: RegExp = /^[A-Za-z]+$/;
  return string.test(value);
};

/**
 * This function will check the min length of the value
 * @param {string} value the value will be checked
 * @param {number} length the min length of the min length validation
 */
export const stringMinLength = (value: string, length: number): boolean => {
  if (value.length > length) {
    return true;
  } else {
    return false;
  }
};

/**
 * This function will check the max length of the value
 * @param {string} value the value will be checked
 * @param {number} length the max length of the max length validation
 */
export const stringMaxLength = (value: string, length: number): boolean => {
  if (value.length < length) {
    return true;
  } else {
    return false;
  }
};

/**
 * This function will check whether the value is lower case or not
 * @param {string} value the value will be checked
 */
export const stringLowerCase = (value: string): boolean => {
  const lowerCaseRegExp: RegExp = /^[a-z]+$/;
  return lowerCaseRegExp.test(value);
};

/**
 * This function will check whether the value is upper case or not
 * @param {string} value the value will be checked
 */
export const stringUpperCase = (value: string): boolean => {
  const upperCaseRegExp: RegExp = /^[A-Z]+$/;
  return upperCaseRegExp.test(value);
};

/**
 * This function will check whether the value's form is email or not
 * @param {string} value the value will be checked
 */
export const stringEmail = (value: string): boolean => {
  const emailRegExp: RegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return emailRegExp.test(value);
};

/**
 * This function will check whether the value is matched the regual express passed in or not
 * @param {string} value the value will be checked
 */
export const stringMix = (value: string, match: RegExp): boolean => {
  return match.test(value);
};
