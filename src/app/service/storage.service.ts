import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getTodo(){
    return JSON.parse(localStorage.getItem("todo") !)
  }
  public whatever(){
    
  }
}
