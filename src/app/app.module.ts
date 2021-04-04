import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { ShosenUserComponent } from './shosen-user/shosen-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ShosenUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'users', component: UsersComponent, children: [{
        path: ':id', component: ShosenUserComponent
      }]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
