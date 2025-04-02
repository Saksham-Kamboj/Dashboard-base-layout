/**
 * @param T Send the type you want as Value
 *
 * @example
 * const a: IDynamicKey<string> = {
 *   name: "Samyak"
 * }
 */
export interface IDynamicKey<T> {
  [key: string]: T;
}

export type MeasureRefType = (element: HTMLOrSVGElement | null) => void;

export interface IDatePayload {
  startDate: string;
  endDate: string;
}
export interface IDatePayload2 {
  pageName: string;
  value: { startDate: string; endDate: string };
}

export interface ITimePayload {
  from: number;
  to: number;
}


export interface IMetadataPayload {
  page: number;
  limit: number;
}

export interface ITableWithLoadingPayload extends IMetadataPayload {
  isLoading: boolean;
}