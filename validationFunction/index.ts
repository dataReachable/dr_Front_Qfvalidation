/**
 * @file this file will handle all the form validation function
 * @date 2020-10-01
 * @author Frank
 * @lastModify Frank 2020-10-01
 */
import { validationFunc } from "./schemafun/index";

/* <------------------------------------ **** handleSchemaSelect START **** ------------------------------------ */
/**
 * this function is mainly doing: select the correct validation function from the schemafun folder
 * @param {string} value the value that pass to the schema function
 * @param {string} dataType the data type: such as string, number
 * @param {string} schemaType the schema that select to check the value
 * @param {string} schemaRule the rule that pass to the schema
 */
const handleSchemaSelect = (
  value: string,
  dataType: "number" | "string",
  schemaType:
    | "number"
    | "string"
    | "minLength"
    | "maxLength"
    | "matches"
    | "lowerCase"
    | "upperCase"
    | "email",
  schemaRule: Number | RegExp | null
): boolean | undefined => {
  /* <--------------------------- * number START * --------------------------- */
  if (dataType === "number" && schemaType === "number") {
    return validationFunc.number.type(value);
  } else if (dataType === "number" && schemaType === "minLength") {
    return validationFunc.number.minLength(value, schemaRule);
  } else if (dataType === "number" && schemaType === "maxLength") {
    return validationFunc.number.maxLength(value, schemaRule);
  } else if (dataType === "number" && schemaType === "matches") {
    return validationFunc.number.mix(value, schemaRule);
    /* --------------------------- * number END * --------------------------- */

    /* <--------------------------- * string START * --------------------------- */
  } else if (dataType === "string" && schemaType === "string") {
    return validationFunc.string.type(value);
  } else if (dataType === "string" && schemaType === "minLength") {
    return validationFunc.string.minLength(value, schemaRule);
  } else if (dataType === "string" && schemaType === "maxLength") {
    return validationFunc.string.maxLength(value, schemaRule);
  } else if (dataType === "string" && schemaType === "lowerCase") {
    return validationFunc.string.lowerCase(value);
  } else if (dataType === "string" && schemaType === "upperCase") {
    return validationFunc.string.upperCase(value);
  } else if (dataType === "string" && schemaType === "email") {
    return validationFunc.string.emial(value);
  } else if (dataType === "string" && schemaType === "matches") {
    return validationFunc.string.mix(value, schemaRule);
  }
  /* --------------------------- * string END * --------------------------- */
};
/* <------------------------------------ **** handleSchemaSelect END **** ------------------------------------ */

/* <------------------------------------ **** handleErrorMessageArr START **** ------------------------------------ */
interface ValueSchema {
  dataType: "number" | "string";
  schemaType:
    | "number"
    | "string"
    | "minLength"
    | "maxLength"
    | "matches"
    | "lowerCase"
    | "upperCase"
    | "email";
  schemaRule: number | RegExp | null;
  errorMessage: string;
}
/**
 * this function is mainly doing: pass the value to the handleSchemaSelect function and get the result and errormessage to the error message arr
 * @param {sting} value the value that pass to the schema function
 * @param {object} schema the schema and rule pass to the validation function
 */
const handleErrorMessageArr = (value: string, schema: Array<ValueSchema>) => {
  let errorMessageArr: Array<string> = [];
  schema.map((item: ValueSchema) => {
    if (
      handleSchemaSelect(value, item.dataType, item.schemaType, item.schemaRule)
    ) {
    } else {
      errorMessageArr.push(item.errorMessage);
    }
  });
  return errorMessageArr;
};
/* <------------------------------------ **** handleErrorMessageArr END **** ------------------------------------ */

/* <------------------------------------ **** formValidation START **** ------------------------------------ */
const qfvalidation = (value: string, schema: Array<ValueSchema>) => {
  const errorMessageArr = handleErrorMessageArr(value, schema);
  let firstErrorMessage: string = "";
  let status: boolean = true;
  if (errorMessageArr.length > 0) {
    status = false;
    firstErrorMessage = errorMessageArr[0];
  }
  const result = {
    status: status,
    errorMessage: firstErrorMessage,
  };
  return result;
};
/* <------------------------------------ **** formValidation END **** ------------------------------------ */

export { qfvalidation };

export type ValueSchemaType = ValueSchema;
