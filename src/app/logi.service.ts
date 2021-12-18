import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogiService {
  private basepath = 'http://localhost:13676/api/Users';

  constructor(private http:HttpClient) { }
  public getUser(data:any):Observable<[]>
  {
    return this.http.post<[]>(this.basepath,data);
  }
}
