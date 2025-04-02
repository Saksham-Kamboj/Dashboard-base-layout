"use client";

import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import { LocalStorageEnum, RoutePathEnum } from "@/enum";
import { StorageUtill } from "@/utills";

axios.defaults.headers.common.timezone =
  Intl.DateTimeFormat().resolvedOptions().timeZone;
axios.defaults.headers.common["Cache-Control"] = "no-cache";

/** Api Helper Class */
export class ApiHelper {
  /**
   * @functions {send} -To make generic API calls (POST, GET, DELETE, UPDATE, etc.)
   * @param {AxiosRequestConfig} config
   * @return {Promise<AxiosResponse<T>>}
   */
  public static async send<T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const res: AxiosResponse<T, T> = await axios(config);
    return res;
  }

  /**
   * @functions {initRequestManager} Manage Request
   */
  public static initRequestManager() {
    axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const newConfig = config;
        const token = StorageUtill.getLocalStorage(LocalStorageEnum.TOKEN);
        if (token) {
          newConfig.headers.Authorization = `Bearer ${token}`;
        }
        return newConfig;
      },
      (error: AxiosError) => Promise.reject(error)
    );
  }

  /**
   * @functions {responseHandler} Manage response through interceptor
   */
  public static responseHandler() {
    axios.interceptors.response.use(
      (response: AxiosResponse) => response,

      (error: AxiosError) => {
        if (error?.response?.status === 401) {
          // Check if window is defined (client-side only)
          if (typeof window !== "undefined") {
            StorageUtill.clearLocalStorage();
            window.location.href = RoutePathEnum.SIGN_IN;
          }
        }
        return Promise.reject(error.response?.data);
      }
    );
  }

  /**
   *  @functions {init} To initiate API call
   */
  public static init() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    ApiHelper.initRequestManager();
    ApiHelper.responseHandler(); // Make sure this is initialized
  }
}

// Initialize API Helper
ApiHelper.init();
