"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import loginPageBackground from "@/assets/login_page_background_1.png";
import { InputAdornment } from "@mui/material";
import { Icon } from "../../common/icon";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import TextInputField from "../../common/textInputField";
import {
  CONFIRM_PASSWORD,
  EMAIL_ADDRESS,
  NEW_PASSWORD,
  PASSWORD,
  VERIFICATION_CODE,
} from "@/constants";
import { LogInController } from "./login.controller";
import { ValidationHelper } from "@/helpers";

function LoginForm() {
  const { getters, handlers, ref } = LogInController();
  const {
    email,
    password,
    showPassword,
    isProcessing,
    formState,
    otp,
    newPassword,
    confirmPassword,
  } = getters;

  const {
    onEmailChange,
    onPasswordChange,
    handleShowPassword,
    handleSubmit,
    onOtpChange,
    onNewPasswordChange,
    onConfirmPasswordChange,
    handleOtpVerification,
    handleForgotPassword,
    handleForgotPasswordOtp,
    handleResetPassword,
    setFormState,
    handleResendOtp,
  } = handlers;

  const { emailRef, passwordRef, otpRef, newPasswordRef, confirmPasswordRef } =
    ref;

  const renderForm = () => {
    switch (formState) {
      case "login":
        return (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <TextInputField
                  type="email"
                  placeholder={EMAIL_ADDRESS}
                  label={EMAIL_ADDRESS}
                  onChange={onEmailChange}
                  value={email}
                  ref={emailRef}
                  validation={ValidationHelper.emailValidator}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon
                          icon={faEnvelope}
                          title="Email"
                          color="inherit"
                          size="small"
                          onlyIcon
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="grid gap-2">
                <TextInputField
                  type={showPassword ? "text" : "password"}
                  placeholder={PASSWORD}
                  label={PASSWORD}
                  onChange={onPasswordChange}
                  ref={passwordRef}
                  value={password}
                  validation={ValidationHelper.validateNotEmpty}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment sx={{ ml: 0.5 }} position="end">
                        <Icon
                          icon={showPassword ? faEyeSlash : faEye}
                          // title={showPassword ? "hide" : "show"}
                          onClick={handleShowPassword}
                          color="inherit"
                          size="small"
                        />
                      </InputAdornment>
                    ),
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon
                          icon={faLock}
                          title="Password"
                          color="inherit"
                          size="small"
                          onlyIcon
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                type="submit"
                disabled={isProcessing}
                className="bg-primary"
              >
                {isProcessing ? "Signing in..." : "Sign In"}
              </Button>
              <div className="text-center">
                <Button
                  variant="link"
                  className="text-sm text-primary"
                  onClick={() => setFormState("forgotPassword")}
                >
                  Forgot password?
                </Button>
              </div>
            </div>
          </form>
        );

      case "otp":
        return (
          <form onSubmit={handleOtpVerification}>
            <div className="grid gap-4">
              <div className="text-center mb-4">
                <p>We&apos;ve sent a verification code to your email</p>
                <p className="font-medium">{email}</p>
              </div>
              <div className="grid gap-2">
                <TextInputField
                  type="text"
                  placeholder={VERIFICATION_CODE}
                  label={VERIFICATION_CODE}
                  onChange={onOtpChange}
                  value={otp}
                  ref={otpRef}
                  validation={ValidationHelper.validateNotEmpty}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon
                          icon={faKey}
                          title="Verification Code"
                          color="inherit"
                          size="small"
                          onlyIcon
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                type="submit"
                className="bg-primary"
                disabled={isProcessing}
              >
                {isProcessing ? "Verifying..." : "Verify"}
              </Button>
              <div className="text-center">
                <Button
                  variant="link"
                  className="text-sm text-primary"
                  onClick={handleResendOtp}
                  disabled={isProcessing}
                >
                  Resend verification code
                </Button>
              </div>
              <div className="text-center">
                <Button
                  variant="link"
                  className="text-sm text-primary"
                  onClick={() => setFormState("login")}
                >
                  Back to login
                </Button>
              </div>
            </div>
          </form>
        );

      case "forgotPassword":
        return (
          <form onSubmit={handleForgotPassword}>
            <div className="grid gap-4">
              <div className="text-center mb-4">
                <p>Enter your email to receive a verification code</p>
              </div>
              <div className="grid gap-2">
                <TextInputField
                  type="email"
                  placeholder={EMAIL_ADDRESS}
                  label={EMAIL_ADDRESS}
                  onChange={onEmailChange}
                  value={email}
                  ref={emailRef}
                  validation={ValidationHelper.emailValidator}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon
                          icon={faEnvelope}
                          title="Email"
                          color="inherit"
                          size="small"
                          onlyIcon
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                type="submit"
                className="bg-primary"
                disabled={isProcessing}
              >
                {isProcessing ? "Sending..." : "Send Verification Code"}
              </Button>
              <div className="text-center">
                <Button
                  variant="link"
                  className="text-sm text-primary"
                  onClick={() => setFormState("login")}
                >
                  Back to login
                </Button>
              </div>
            </div>
          </form>
        );

      case "forgotPasswordOtp":
        return (
          <form onSubmit={handleForgotPasswordOtp}>
            <div className="grid gap-4">
              <div className="text-center mb-4">
                <p>We&apos;ve sent a verification code to your email</p>
                <p className="font-medium">{email}</p>
              </div>
              <div className="grid gap-2">
                <TextInputField
                  type="text"
                  placeholder={VERIFICATION_CODE}
                  label={VERIFICATION_CODE}
                  onChange={onOtpChange}
                  value={otp}
                  ref={otpRef}
                  validation={ValidationHelper.validateNotEmpty}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon
                          icon={faKey}
                          title="Verification Code"
                          color="inherit"
                          size="small"
                          onlyIcon
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                type="submit"
                className="bg-primary"
                disabled={isProcessing}
              >
                {isProcessing ? "Verifying..." : "Verify"}
              </Button>
              <div className="text-center">
                <Button
                  variant="link"
                  className="text-sm text-primary"
                  onClick={handleResendOtp}
                  disabled={isProcessing}
                >
                  Resend verification code
                </Button>
              </div>
              <div className="text-center">
                <Button
                  variant="link"
                  className="text-sm text-primary"
                  onClick={() => setFormState("forgotPassword")}
                >
                  Back
                </Button>
              </div>
            </div>
          </form>
        );

      case "resetPassword":
        return (
          <form onSubmit={handleResetPassword}>
            <div className="grid gap-4">
              <div className="text-center mb-4">
                <p>Create a new password</p>
              </div>
              <div className="grid gap-2">
                <TextInputField
                  type={showPassword ? "text" : "password"}
                  placeholder={NEW_PASSWORD}
                  label={NEW_PASSWORD}
                  onChange={onNewPasswordChange}
                  value={newPassword}
                  ref={newPasswordRef}
                  validation={ValidationHelper.validateNotEmpty}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon
                          icon={faLock}
                          title="Password"
                          color="inherit"
                          size="small"
                          onlyIcon
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon
                          icon={showPassword ? faEyeSlash : faEye}
                          title={
                            showPassword ? "Hide password" : "Show password"
                          }
                          onClick={handleShowPassword}
                          color="inherit"
                          size="small"
                          onlyIcon
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="grid gap-2">
                <TextInputField
                  type={showPassword ? "text" : "password"}
                  placeholder={CONFIRM_PASSWORD}
                  label={CONFIRM_PASSWORD}
                  onChange={onConfirmPasswordChange}
                  value={confirmPassword}
                  ref={confirmPasswordRef}
                  validation={ValidationHelper.validateNotEmpty}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon
                          icon={faLock}
                          title="Password"
                          color="inherit"
                          size="small"
                          onlyIcon
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon
                          icon={showPassword ? faEyeSlash : faEye}
                          title={
                            showPassword ? "Hide password" : "Show password"
                          }
                          onClick={handleShowPassword}
                          color="inherit"
                          size="small"
                          onlyIcon
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                type="submit"
                className="bg-primary"
                disabled={isProcessing}
              >
                {isProcessing ? "Resetting..." : "Reset Password"}
              </Button>
              <div className="text-center">
                <Button
                  variant="link"
                  className="text-sm text-primary"
                  onClick={() => setFormState("login")}
                >
                  Back to login
                </Button>
              </div>
            </div>
          </form>
        );

      default:
        return null;
    }
  };

  const getFormTitle = () => {
    switch (formState) {
      case "login":
        return "Sign In";
      case "otp":
        return "Verification";
      case "forgotPassword":
        return "Forgot Password";
      case "forgotPasswordOtp":
        return "Verification";
      case "resetPassword":
        return "Reset Password";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-screen w-full mx-auto h-screen flex items-center justify-center relative">
      <Image
        src={loginPageBackground}
        alt="Login page background image"
        width={1920} // Default resolution for fallback
        height={1080} // Default resolution for fallback
        loading="lazy"
        className="w-screen h-screen object-cover absolute"
      />

      <div className="z-10 w-full max-w-md mx-auto p-4">
        <Card className="backdrop-blur-sm bg-white/50 shadow-lg border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              {getFormTitle()}
            </CardTitle>
          </CardHeader>
          <CardContent>{renderForm()}</CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LoginForm;
