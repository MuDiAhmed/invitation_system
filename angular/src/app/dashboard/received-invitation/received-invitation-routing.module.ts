import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReceivedInvitationComponent} from "./received-invitation.component";


const routes: Routes = [
  {
    path: '',
    component: ReceivedInvitationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivedInvitationRoutingModule { }
