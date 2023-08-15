import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private backendUrl = 'http://your-backend-url'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  submitForm(data: any): Observable<any> {
    const url = `${this.backendUrl}/submit`; // Replace 'submit' with your actual API endpoint
    return this.http.post(url, data);
  }
}
