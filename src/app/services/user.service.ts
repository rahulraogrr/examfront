import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Creates a Member 
   * 
   * @param user User Object
   * @returns 
   */
  public createUser(user:any){
    return this.httpClient.post(baseURL+'/user',user);
  }
}