import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStateSignalService {
  employee = signal<any>(null);

  setEmp(employee: any) {
    this.employee.set(employee);
  }

  clearEmp() {
    this.employee.set(null);
  }
}
