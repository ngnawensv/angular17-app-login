import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  debugger;
  const myToken = localStorage.getItem('angular17Token');
  
  const cloneRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myToken}`
    }
  })
  return next(cloneRequest);
};
