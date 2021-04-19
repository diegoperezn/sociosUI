import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberListComponent } from './pages/member/list/member-list.component';
import { ActivityListComponent } from './pages/activity/activity-list.component';
import { ConfiguracionComponent } from './pages/configuration/configuration.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { ActivityDetailsComponent } from './pages/activity/activity-details.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatModule } from './shared/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './shared/components/navigate/sidenav.component';
import { MemberEditionComponent } from './pages/member/member-edition/member-edition.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    ActivityListComponent,
    ConfiguracionComponent,
    ActivityComponent,
    ActivityDetailsComponent,
    SidenavComponent,
    MemberEditionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatModule,
    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
