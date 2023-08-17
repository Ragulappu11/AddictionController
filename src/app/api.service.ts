import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private backendUrl = 'http://your-backend-url'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  sendCombinedData(data: any): Observable<any> {
    const url = `${this.backendUrl}/send-data`; // Replace 'send-data' with your actual API endpoint
    return this.http.post(url, data);
  }

  getPromptData(): Observable<any> {
    const url = `${this.backendUrl}/output`; // Replace 'get-prompt-data' with your actual API endpoint
    return this.http.get(url);
  }

}
