import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /******************** HTTP FormData ********************/
  private appendFormData(myFormData: { [x: string]: any; }): FormData {
    let fd = new FormData();
    for (let key in myFormData) {
      fd.append(key, myFormData[key]);
    }
    return fd;
  }

  /******************** HTTP Params ********************/
  private appendParams(myParams: { [x: string]: any; }): HttpParams {
    let params = new HttpParams();
    for (let key in myParams) {
      params = params.append(key, myParams[key]);
    }
    return params;
  }


  public get(url: string, params?: { [x: string]: any; }): Observable<any> {
    let _params = params ? { params: this.appendParams(params) } : {};
    url = environment.url + url;
    return this.httpClient.get<any>(url, _params);
  }

  public post(url: string, data: { [x: string]: any; }): Observable<any> {
    return this.httpClient.post<HttpClient>(url, data)
      .pipe(
        map(response => {
          // if (response['status'] === 200) {
          return response;
          // }
        })
      );
  }

  public put(url: string, data: { [x: string]: any; }, backGroundUrls?: boolean): Observable<any> {
    return this.httpClient.put<HttpClient>(url, data)
      .pipe(
        map(response => {
          // if (response['status'] === 200) return response;
        })
      );
  }

  public delete(url: string, id: string): Observable<any> {
    return this.httpClient.delete<HttpClient>(url + '/' + id)
      .pipe(
        map(response => {
          // if (response['status'] === 200) return response;
        })
      );
  }
}
