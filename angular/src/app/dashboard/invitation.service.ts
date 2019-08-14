import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalStorageService} from "../local-storage.service";
import {AppConfig} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  private baseUrl = this.AppConfig.API+this.AppConfig.URI.invitation.baseUrl;

  constructor(private http: HttpClient, private AppConfig: AppConfig,
              private localStorageService: LocalStorageService) {
  }

  getSentInvitations() {
    //TODO:: move this part to interceptor
    let token = this.localStorageService.get(this.AppConfig.LocalStorage.token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token
      })
    };
    return this.http.get(this.baseUrl + this.AppConfig.URI.invitation.url.sent, httpOptions);
  }
  getReceivedInvitations() {
    //TODO:: move this part to interceptor
    let token = this.localStorageService.get(this.AppConfig.LocalStorage.token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token
      })
    };
    return this.http.get(this.baseUrl + this.AppConfig.URI.invitation.url.received, httpOptions);
  }
  acceptRejectInvitation(id, status){
    //TODO:: move this part to interceptor
    let token = this.localStorageService.get(this.AppConfig.LocalStorage.token);
    let url = this.baseUrl + this.AppConfig.URI.invitation.url.acceptReject.replace("{id}", id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token
      })
    };
    return this.http.put(url, {"accept" : status}, httpOptions);
  }

  deleteInvitation(id){
    //TODO:: move this part to interceptor
    let token = this.localStorageService.get(this.AppConfig.LocalStorage.token);
    let url = this.baseUrl + this.AppConfig.URI.invitation.url.acceptReject.replace("{id}", id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token
      })
    };
    return this.http.delete(url, httpOptions);
  }
}
