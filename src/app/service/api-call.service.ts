import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(public http: HttpClient) { }
  public getUser(){
    return this.http.get("https://dummyjson.com/users")
  }

  public getOneUser(userID:string){
    return this.http.get(`https://dummyjson.com/users/${userID}`)
  }
}
