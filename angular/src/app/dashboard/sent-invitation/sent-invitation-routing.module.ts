import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {SentInvitationComponent} from "./sent-invitation.component";


const routes: Routes = [
  {
    path: '',
    component: SentInvitationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SentInvitationRoutingModule { }
