import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from "./user/users.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        UsersComponent
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
