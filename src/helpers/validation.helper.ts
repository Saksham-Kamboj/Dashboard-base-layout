import { RegexLibrary } from "@/library";
import {
  THIS_FILED_IS_REQUIRED,
  PLEASE_ENTER_VALID_URL,
  PLEASE_ENTER_VALID_PHONENUMBER,
  MUST_BE_IN_VALID_FORMAT,
} from "@/constants";
import { IValidationResponse } from "@/components/common/textInputField";

/**
 * This class holds all the validations Validation Helper
 */
export class ValidationHelper {
  /**
   * @functions {validateNone} - Validate a String
   * @return {IValidationResponse}
   */
  public static validateNone(): IValidationResponse {
    return { isValid: true, message: "" };
  }

  /**
   * @functions {validateNotEmpty} - Validate that the value should not be empty
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validateNotEmpty(value: string): IValidationResponse {
    if (!value) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    if (value.trim().length <= 0) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    return {
      isValid: true,
      message: "",
    };
  }

  /**
   * @functions {validateURL} - Validate  that the value should be URL
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validateURL(value: string): IValidationResponse {
    if (!RegexLibrary.URL.test(value)) {
      return {
        isValid: false,
        message: PLEASE_ENTER_VALID_URL,
      };
    }
    return {
      isValid: true,
      message: "",
    };
  }

  /**
   * @functions {validatePhone} - Validate  that the value should be Phone Number
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validatePhone(value: string): IValidationResponse {
    if (RegexLibrary.PHONE_NUMBER.test(value)) {
      return {
        isValid: true,
        message: "",
      };
    }

    return {
      isValid: false,
      message: PLEASE_ENTER_VALID_PHONENUMBER,
    };
  }

  /**
   * @functions {emailValidator} - Validate an Email address
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static emailValidator = (value: string): IValidationResponse => {
    const trimedValue = value.trim().toLocaleLowerCase();

    if (trimedValue.length === 0) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    if (!RegexLibrary.MAIL.test(trimedValue)) {
      return {
        isValid: false,
        message: MUST_BE_IN_VALID_FORMAT,
      };
    }
    return { isValid: true, message: "" };
  };
}
