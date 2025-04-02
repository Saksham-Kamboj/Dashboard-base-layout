"use client"

import { OutlinedTextFieldProps } from '@mui/material';
import {
  ChangeEvent,
  ForwardedRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';

import { TextInputFieldEventEnum } from './enum';
import {
  ITextInputFieldData,
  ITextInputFieldRef,
  IValidationResponse,
} from './interface/textInputField.interface';

interface IProps {
  onChange: (event: ITextInputFieldData) => void;
  value: string;
  validation: (value: string) => IValidationResponse;
  InputProps?: OutlinedTextFieldProps['InputProps'];
  ref: ForwardedRef<ITextInputFieldRef>;
}

interface ITextInputFieldControllerResponse {
  getters: {
    isError: boolean;
    helperText: string;
  };
  handlers: {
    onChangeLocal: (event: ChangeEvent<HTMLInputElement>) => void;
  };
}

/**
 * Text Input Field Controller
 * @param {IProps} props
 * @return {ITextInputFieldControllerResponse}
 */
export const useTextInputFieldController = (
  props: IProps,
): ITextInputFieldControllerResponse => {
  const { onChange, validation, ref, value } = props;
  const [isError, setIsError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>('');

  // Set Error
  const setError = (validationData: IValidationResponse) => {
    setIsError(!validationData.isValid);
    if (!validationData.isValid) {
      setHelperText(validationData.message);
    } else {
      setHelperText('');
    }
  };

  /**
   * @function onChangeLocal On Change Updates the Local State as well as Validation the Value given by the User
   * @param {ChangeEvent<HTMLInputElement>} event
   */
  const onChangeLocal = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const valueData = event.target.value;
      const validationResult: IValidationResponse = validation(valueData);
      const customEvent: ITextInputFieldData = {
        errorMsg: validationResult.message || '',
        value: valueData,
        event,
        eventType: TextInputFieldEventEnum.HTML,
      };

      onChange(customEvent);
      setError(validationResult);
    },
    [onChange, validation],
  );

  useImperativeHandle(ref, () => ({
    validateValue: (): boolean => {
      const validationResponse: IValidationResponse = validation
        ? validation(value)
        : ({} as IValidationResponse);
      setError(validationResponse);
      setHelperText(validationResponse.message);
      return validationResponse.isValid;
    },
  }));

  return {
    getters: {
      isError,
      helperText,
    },
    handlers: {
      onChangeLocal,
    },
  };
};
