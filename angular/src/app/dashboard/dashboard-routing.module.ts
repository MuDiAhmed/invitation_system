import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'sent',
        loadChildren: () => import('./sent-invitation/sent-invitation.module').then(mod => mod.SentInvitationModule),
      },
      {
        path: 'received',
        loadChildren: () => import('./received-invitation/received-invitation.module').then(mod => mod.ReceivedInvitationModule),
      },
      {
        path: 'add',
        loadChildren: () => import('./add-invitation/add-invitation.module').then(mod => mod.AddInvitationModule),
      },
      {
        path: '',
        redirectTo: 'sent'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule { }
