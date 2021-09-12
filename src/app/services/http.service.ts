import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any) {
    
    const headers = new HttpHeaders;
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    headers.set('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type,Authorization,Access-Control-Allow-Methods');
    headers.set('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    const options = { headers: headers, withCredentials: false};
    const url = environment.apiUrl + serviceName; 
    return this.http.post(url, data, options);
  }

  put(serviceName: string) {
    
    const headers = new HttpHeaders;
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    headers.set('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type,Authorization,Access-Control-Allow-Methods');
    headers.set('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    const options = { headers: headers, withCredentials: false};
    const url = environment.apiUrl + serviceName; 
    return this.http.put(url, options);
  }
  
  delete(serviceName: string) {

    const headers = new HttpHeaders;
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    headers.set('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type,Authorization,Access-Control-Allow-Methods');
    headers.set('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    const options = { headers: headers, withCredentials: false};
    const url = environment.apiUrl + serviceName;
    return this.http.delete(url, options);
    
  }

  get(serviceName: string) {

    const headers = new HttpHeaders;
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    headers.set('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type,Authorization,Access-Control-Allow-Methods');
    headers.set('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    const options = { headers: headers, withCredentials: false};
    const url = environment.apiUrl + serviceName;
    return this.http.get(url, options);
  }

}
