import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './pages/member/member-list.component';
import { ActivityListComponent } from './pages/activity/activity-list.component';
import { ConfiguracionComponent } from './pages/configuration/configuration.component';
import { SocioEditComponent } from './pages/member/member-edition.component';

const routes: Routes = [
  { path: 'socios', component: MemberListComponent },
  { path: 'socios/:id', component: SocioEditComponent },
  { path: 'actividades', component: ActivityListComponent },
  { path: 'configuracion', component: ConfiguracionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
  
  constructor() {

  }


}
