import {NgModule} from '@angular/core';

import {SentInvitationComponent} from './sent-invitation.component';
import {SentInvitationRoutingModule} from "./sent-invitation-routing.module";
import {MatButtonModule, MatIconModule, MatListModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SentInvitationRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [SentInvitationComponent],
  exports: [SentInvitationComponent]
})

export class SentInvitationModule {
}
