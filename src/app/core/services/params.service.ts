import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ParamsService {
  constructor() {}

  getQueryParams(params?: any): string {
    let args: HttpParams = new HttpParams();
    Object.keys(params).forEach((paramName: string) => {
      args = args.append(paramName, String(params[paramName]));
    });
    return args.toString();
  }
}
