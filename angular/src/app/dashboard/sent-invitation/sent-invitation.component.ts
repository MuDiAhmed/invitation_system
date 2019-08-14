import { Component } from '@angular/core';
import {InvitationService} from "../invitation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'sent-invitation-component',
    templateUrl: './sent-invitation.component.html'
})

export class SentInvitationComponent {

  invitations = null;

  constructor(private invitationService: InvitationService, private router:Router,
              private route: ActivatedRoute){
    this.invitationService.getSentInvitations()
      .subscribe((response) => {
          this.invitations = response;
          console.log(response);
      })
  }

  delete(invitation, index){
    console.log(index);
    this.invitationService.deleteInvitation(invitation.id)
      .subscribe((response) => {
        this.invitations.splice(index,1);
        console.log(this.invitations);
      })
  }

  addInvitation(){
    this.router.navigate(['/dashboard/add'], { relativeTo: this.route });
  }
}
