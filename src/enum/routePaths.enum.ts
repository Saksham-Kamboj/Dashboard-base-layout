export enum RoutePathEnum {
  NONE = "",
  HOME = "/",

  FORGET_PASSWORD = "/auth/reset-password",
  ADMIN_LOGIN = "/auth/login",

  DASHBOARD= "/admin/dashboard",

  ERROR_401 = "/401",
  ERROR_403 = "/403",
  ERROR_404 = "/404",
  ERROR_500 = "/500",
  ENVIRONMENT = "ENVIRONMENT",
  SIGN_IN = "SIGN_IN",

}

export default RoutePathEnum;
