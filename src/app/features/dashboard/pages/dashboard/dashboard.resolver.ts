import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const DashboardResolver: ResolveFn<any> = () => {
  
  return "mock data showed by dashboard resolver";
};
