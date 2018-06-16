import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ZzzService} from "./services/zzz/zzz.service";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from './components/main/main.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes:Routes =[
  {path:"",component:MainComponent},
  {path:"userDetails/:id",component:UserDetailsComponent},
  {path:"postDetails/:id",component:PostDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    MainComponent,
    PostDetailsComponent
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
