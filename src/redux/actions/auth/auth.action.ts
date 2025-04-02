import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/services';

import { IAdminLogInRequest, IAdminLogInResponse, IApiResponseWithBody } from '@/interfaces';

/**
 * Authentication Thunk
 */
export class AuthenticationThunk {
  /**
   * @function {signIn} - Method for sign In
   * @param {IAdminLogInRequest} payload
   * @return {Promise<IApiResponseWithBody<IAdminLogInResponse>>}
   */
  public static adminSignIn = createAsyncThunk(
    'auth/signin',
    async (
      payload: IAdminLogInRequest,
    ): Promise<IApiResponseWithBody<IAdminLogInResponse>> => {
      const response = await AuthService.AdminLogIn(payload);
      return response;
    },
  );

  /**
   * @function {signUp} - Method for  sign Up
   * @param {ISignUpRequest} payload
   * @return {Promise<IApiResponseWithBody<ISignUpResponse>>}
   */
  // public static signUp = createAsyncThunk(
  //   'auth/signup',
  //   async (
  //     payload: ISignUpRequest,
  //   ): Promise<IApiResponseWithBody<ISignUpResponse>> => {
  //     const response = await AuthService.SignUp(payload);
  //     return response;
  //   },
  // );

  /**
   * @function {resetPassword} - Method for Reset Password
   * @param {IResetPasswordRequest} payload
   * @return {Promise<IResetPasswordResponse>}
   */
  // public static resetPassword = createAsyncThunk(
  //   'auth/resetPassword',
  //   async (payload: IResetPasswordRequest): Promise<IResetPasswordResponse> => {
  //     const response = await AuthService.resetPassword(payload);
  //     return response;
  //   },
  // );

  /**
   * @function {forgetPassword} - Method for Forget Password
   * @param {IForgotPasswordRequest} payload
   * @return {Promise<IForgotPasswordResponse>}
   */
  // public static forgetPassword = createAsyncThunk(
  //   'auth/forgotPassword',
  //   async (
  //     payload: IForgotPasswordRequest,
  //   ): Promise<IForgotPasswordResponse> => {
  //     const response = await AuthService.forgotPassword(payload);
  //     return response;
  //   },
  // );

  /**
   * @function {validateResetPasswordtoken} - Method for validate Reset Password token
   * @param {IValidateTokenRequest} payload
   * @return {Promise<IValidateTokenResponse>}
   */
  // public static validateResetPasswordToken = createAsyncThunk(
  //   'auth/validateResetToken',
  //   async (payload: IValidateTokenRequest): Promise<IValidateTokenResponse> => {
  //     const response = await AuthService.resetPasswordValidateToken(payload);
  //     return response;
  //   },
  // );

  /**
   * @function {logout} - Method for Logout
   */
  // public static logout = createAsyncThunk('auth/logout', async () => {
  //   const response = await AuthService.logout();
  //   return response;
  // });
}
