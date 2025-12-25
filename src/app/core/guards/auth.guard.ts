import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStateSignalService } from '../services/auth-state-signal.service';

export const authGuard: CanActivateFn = () => {
  const authState = inject(AuthStateSignalService);

  return !!authState.employee();
};
