import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInvitationRoutingModule } from './add-invitation-routing.module';
import { AddInvitationComponent } from './add-invitation.component';


@NgModule({
  declarations: [AddInvitationComponent],
  imports: [
    CommonModule,
    AddInvitationRoutingModule
  ]
})
export class AddInvitationModule { }
