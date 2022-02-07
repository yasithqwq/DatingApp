import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  basUrl = 'https://localhost:5001/api/';
  constructor(private http:HttpClient) { }

  login(model: any){
    return this.http.post(this.basUrl + 'account/login', model);
  }
}
