/**
 * @file this file will contain all the validation function with number
 * @date 2020-10-01
 * @author Frank
 * @lastModify Frank 2020-10-01
 */

/**
 * This function will check whether the value is number or not
 * @param {string} value the value will be checked
 */
export const numberType = (value: string): boolean => {
  const number = /^[0-9]*$/;
  return number.test(value);
};

/**
 * This function will check the min length of the value
 * @param {string} value the value will be checked
 * @param {number} length the min length of the value
 */
export const numberMinLength = (value: string, length: number): boolean => {
  if (value.length > length) {
    return true;
  } else {
    return false;
  }
};

/**
 * This function will check the max length of the value
 * @param {string} value the value will be checked
 * @param {number} length the max length of the value
 */
export const numberMaxLength = (value: string, length: number): boolean => {
  if (value.length < length) {
    return true;
  } else {
    return false;
  }
};

/**
 * This function will check whether the value machs the regualr express or not
 * @param {string} value the value will be checked
 * @param {RegExp} match the regualr express form
 */
export const numberMix = (value: string, match: RegExp) => {
  return match.test(value);
};
