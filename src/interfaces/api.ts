export interface IApiResponseWithBody<T> {
  status: number;
  message: string;
  body: T;
}


