import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "./app.config";
import {LocalStorageService} from "./local-storage.service";
import {tap} from 'rxjs/operators'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = this.AppConfig.API+this.AppConfig.URI.login.baseUrl;

  constructor(private http: HttpClient, private AppConfig:AppConfig,
              private localStorageService: LocalStorageService) {
  }

  login(credintials: Credintials): Observable<TokenResponse>{
    return this.http.post(this.baseUrl, credintials)
      .pipe(tap((response:TokenResponse) => {
          this.localStorageService.set(this.AppConfig.LocalStorage.token,response.token);
      }));
  }
}

export interface Credintials {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}
