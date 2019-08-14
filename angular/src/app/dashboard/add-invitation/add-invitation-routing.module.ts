import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddInvitationComponent} from "./add-invitation.component";


const routes: Routes = [
  {
    path: '',
    component: AddInvitationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddInvitationRoutingModule { }
