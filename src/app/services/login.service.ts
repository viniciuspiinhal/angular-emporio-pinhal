import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  uri = " http://localhost:3000/login"

  //Assincrona - Função com retorno

  login(usuario: User): Observable<any> {
    return this.httpClient.post(this.uri, JSON.stringify(usuario), {
      headers: new HttpHeaders({ 'Content-type': 'application/json' }),
      observe: 'response'
    })
  }

}
