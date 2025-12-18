import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) =>  {
  return next(req).pipe(
    catchError((error) => {
      console.error('HTTP Error occurred:', error);

      let userMessage = 'Something went wrong. Please try again later.';

      if (error.status === 0) {
        userMessage = 'Network error. Check your internet connection.';
      } else if (error.status >= 500) {
        userMessage = 'Server error. Please try again later.';
      } else if (error.status === 404) {
        userMessage = 'Requested resource not found.';
      }

      return throwError(() => ({
        message: userMessage,
        originalError: error
      }));
    })
  );
};
