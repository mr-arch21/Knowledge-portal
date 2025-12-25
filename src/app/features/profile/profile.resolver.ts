import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Api } from '../../core/api';

export const profileResolver: ResolveFn<any> = () => {
  const api = inject(Api);
  return api.getProfile();
};
