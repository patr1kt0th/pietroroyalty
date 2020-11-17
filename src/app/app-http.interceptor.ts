import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'OPTIONS' && req.url.startsWith(environment.apiUrl)) {
      // if (this.userService.user) {
      //   req = req.clone({
      //     headers: new HttpHeaders({
      //       'Accept-Language': this.userService.user.languageCode
      //     })
      //   });
      // }
    }
    return next.handle(req);
  }
}
