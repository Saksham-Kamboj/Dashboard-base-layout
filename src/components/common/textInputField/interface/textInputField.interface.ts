import { ChangeEvent } from 'react';

import { TextInputFieldEventEnum } from '../enum';

export interface ITextInputFieldData {
  errorMsg: string;
  value: string;
  eventType: TextInputFieldEventEnum;
  event?: ChangeEvent<HTMLInputElement>;
  index?: number;
}

export interface IValidationResponse {
  isValid: boolean;
  message: string;
}

export interface IValidationHelperValidate {
  minLength: number;
  maxLength: number;
}

export interface ITextInputFieldRef {
  validateValue: () => boolean;
}

export interface IFieldValueState<T> {
  value: T;
  isValid: boolean;
}
