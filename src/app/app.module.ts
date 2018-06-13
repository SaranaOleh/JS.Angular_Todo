import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ZzzService} from "./services/zzz/zzz.service";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {RouterModule, Routes} from "@angular/router";
const routes:Routes =[
  {path:"",component:AppComponent},
  {path:"userDetails/:id",component:UserDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ZzzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
