import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getData(url: string) {
    return this.httpClient.get<any>(url);
  }

  postData(url: string, data: any) {
    return this.httpClient.post<any>(url, data);
  }

  // ... métodos para otras peticiones (PUT, DELETE)
}