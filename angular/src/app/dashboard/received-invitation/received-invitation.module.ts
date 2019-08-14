import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivedInvitationRoutingModule } from './received-invitation-routing.module';
import { ReceivedInvitationComponent } from './received-invitation.component';
import {MatButtonModule, MatIconModule, MatListModule} from "@angular/material";


@NgModule({
  declarations: [
    ReceivedInvitationComponent
  ],
  imports: [
    CommonModule,
    ReceivedInvitationRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ReceivedInvitationModule { }
