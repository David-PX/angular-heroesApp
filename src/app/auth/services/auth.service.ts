import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseURL : string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth!}
  }

  verificarAutencticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false)
    }

    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
        .pipe(
          map(auth => {
            this._auth = auth;
            return true;
          })
        )
  }

  login(){
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
      .pipe(
        tap(resp => this._auth = resp),
        tap(auth => localStorage.setItem('token', this.auth.id))
      );
  }

  logout(){
    this._auth = undefined;
  }
}
