import { Component } from '@angular/core';
import {ZzzService} from "./services/zzz/zzz.service";
import {User} from "./entities/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:Array<User>;
  constructor(private zzzService:ZzzService){
    this.refresh();
  }
  refresh(){
    this.zzzService.get("user","getAll").subscribe(e=>this.users = e.data);
  }
  onClick(){
    this.zzzService.get("user","getAll").subscribe(e=>console.log(e.data))
  }
  dellUser(id:number){
    this.zzzService.post("user","del",id).subscribe(e=>console.log(e));
    this.refresh();
  }
}
