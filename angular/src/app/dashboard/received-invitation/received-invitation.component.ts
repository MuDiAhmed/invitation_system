import { Component, OnInit } from '@angular/core';
import {InvitationService} from "../invitation.service";

@Component({
  selector: 'app-received-invitation',
  templateUrl: './received-invitation.component.html',
  styleUrls: ['./received-invitation.component.sass']
})
export class ReceivedInvitationComponent {

  invitations = null;

  constructor(private invitationService: InvitationService){
    this.invitationService.getReceivedInvitations()
      .subscribe((response) => {
        this.invitations = response;
        console.log(response);
      })
  }

  acceptReject(invitation, state, index){
    console.log(state, index);
    this.invitationService.acceptRejectInvitation(invitation.id, state)
      .subscribe((response) => {
        this.invitations[index] = response;
        console.log(this.invitations);
      })
  }

}
