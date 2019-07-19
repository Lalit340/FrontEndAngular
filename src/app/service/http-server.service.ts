import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', '*')
};

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  baseUrl = environment.url;

  constructor(private httpClient: HttpClient) { }


  public post(url: any, data: any): any {
    return this.httpClient.post(this.baseUrl + url, data);
  }

  public putWithToken(url: any, data: any): any {
    return this.httpClient.put(this.baseUrl + url, data , {
      headers : new HttpHeaders().set("token", localStorage.getItem('token'))
    });
  }
  
  public put(url: any, data: any): any {
    return this.httpClient.put(this.baseUrl + url, data);
  }

  
  public get(url: any): any {
    return this.httpClient.get(this.baseUrl + url);
  }

  public delete(url: any): any {
    return this.httpClient.delete(this.baseUrl + url);
  }

  public uploadImage(url: any, file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(this.baseUrl + url, formData, {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }

}
