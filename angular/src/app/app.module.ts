import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {AppConfig} from "./app.config"
import {UserService} from "./user.service";
import {StorageServiceModule} from "ngx-webstorage-service";
import {LocalStorageService} from "./local-storage.service";
import {InvitationService} from "./dashboard/invitation.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    StorageServiceModule,
  ],
  providers: [
    {provide: AppConfig, useClass:  AppConfig},
    UserService,
    InvitationService,
    LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
