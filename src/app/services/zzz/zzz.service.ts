import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {User} from "../../entities/User";

@Injectable()
export class ZzzService {
  private baseUrl = "http://pdfstep.zzz.com.ua";
  constructor(private http:HttpClient) { }

  getUrl(action:string,method:string):string{
    return this.baseUrl + "?action=" + action + "&method=" + method;
  }

  get(action:string,method:string):Observable<any>{
    return this.http.get(this.getUrl(action,method));
  }
  post(action:string,method:string,params:Object):Observable<any>{
    const headers:HttpHeaders = new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded");
    let body:HttpParams = new HttpParams();
    for(let key in params){
      body = body.set(key,params[key].toString())
    }
    return this.http.post(this.getUrl(action,method),body.toString(),{headers:headers})
  }
}
