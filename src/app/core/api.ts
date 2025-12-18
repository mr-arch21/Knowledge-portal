import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  getProfile() {
    // return this.http.get('/api/profile');
    return of({
      id: 1,
      name: 'Aryan',
      role: 'Developer',
      experience: '2+ years'
    });
  }
}
