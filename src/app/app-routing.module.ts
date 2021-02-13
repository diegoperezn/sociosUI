import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './pages/member/member-list.component';
import { ActivityListComponent } from './pages/activity/activity-list.component';
import { ConfiguracionComponent } from './pages/configuration/configuration.component';

const routes: Routes = [
  { path: 'socios', component: MemberListComponent },
  { path: 'actividades', component: ActivityListComponent },
  { path: 'configuracion', component: ConfiguracionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
