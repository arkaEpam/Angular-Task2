import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserComponent } from './all-user/all-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { ActiveModule } from './active/active.module';
import { ManageModule } from './manage/manage.module';
import { DeletedModule } from './deleted/deleted.module';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    // UserDetailsComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    ManageModule,
    DeletedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
