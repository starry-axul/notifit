export interface Error {
  code: string;
  data: string;
}

export interface ResponseData {
  data?: any;
  message?: string;
  error?: string;
  status?: number;
  direct?: boolean;
  logging?: boolean;
  meta?: any;
  meta_extra?: any;
}

export interface ResponseOption {
  data?: ResponseData | null;
  message?: string;
  code?: number;
  direct?: boolean;
  logging?: boolean;
  meta?: boolean;
  meta_extra?: any;
}
