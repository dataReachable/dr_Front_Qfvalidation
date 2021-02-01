# Form Validation

<div align="center">
	<img src="./logo/logo.jpeg" />
	<br/>
	<div style="margin:auto">
		<span style="font-size:200%">Form Validation</span>
	</div>
</div>

# Description

This is the DataReachable Form Vlidation Function

# Usage

## Local Environment Requirement

This project requires React with minimal version of 16.13.0 and thus, should install essential NPM packages prior to usage.

The following procedure assumes the node and npm have already been installed and are accessible from the commandline. For installation of node and npm, see [install node and npm](https://www.npmjs.com/get-npm).

```javascript
npm install react
```

## Install All The Necessary Package To The Project

This project also need typescript to load. Please install typescript to use this component library.

```javascript
npm install typescript
```

## Install @possie-engine/qfvalidation to your project

```javascript
npm install @possie-engine/qfvalidation
```

## How to use qfvalidation in your project

1. import qfvalidation in your project

```javascript
import { qfvalidation, ValueSchema } from "@possie-engine/qfvalidation";
```

2. use qfvalidation function to validate the data, the qfvalidation function have two parameters, the first parameter is the value that you want to validate, the second parameter is the schema for the data you want to validate.

```typescript
// here is the data you want to validate
const data: string = `validateData`;
/**
 * this function is mainly doing: select the correct validation function from the schemafun folder
 * @param {string} dataType define the value is number or string
 * @param {string} schemaType define what kind of schema you want use
 * @param {string} schemaRule define you own rule for this schema
 * @param {string} errorMessage define the errormessage when the data not pass this validation
 */
const dataSchema: Array<ValueSchema> = [
  {
    dataType: "string",
    schemaType: "lowerCase",
    schemaRule: null,
    errorMessage: "the data you enter should be lowerCase",
  },
  {
    dataType: "string",
    schemaType: "maxLength",
    schemaRule: 10,
    errorMessage: "the string you enter should be no more than 10",
  },
];

const returnValue = qfvalidation(data, dataSchema);
```

3. qfvalidation return value, `status` is a boolean, when the data pass the validation it will return true and `errorMessage` will be an empty string, if the data not pass the validation, the `status` will be false, and `errorMessage` will return te first errorMessage in the schema which not pass.

```typescript
console.log(returnValue);
//{
//  status: true,
//  errorMessage: "",
//}
```

## List of Schema Type

### Number

| dataType | schemaType | schemaRule | errorMessage |
| -------- | ---------- | ---------- | ------------ |
| number   | number     | null       | string       |
| number   | minLength  | 2          | string       |
| number   | maxLength  | 6          | string       |
| number   | matches    | RegExp     | string       |

### String

| dataType | schemaType | schemaRule | errorMessage |
| -------- | ---------- | ---------- | ------------ |
| string   | string     | null       | string       |
| string   | minLength  | 2          | string       |
| string   | maxLength  | 6          | string       |
| string   | lowerCase  | null       | string       |
| string   | upperCase  | null       | string       |
| string   | email      | null       | string       |
| string   | matches    | RegExp     | string       |
