import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar } from './navigate/nav.component'
import { MemberListComponent } from './pages/member/member-list.component';
import { ActivityListComponent } from './pages/activity/activity-list.component';
import { ConfiguracionComponent } from './pages/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    MemberListComponent,
    ActivityListComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
