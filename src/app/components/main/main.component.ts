import { Component, OnInit } from '@angular/core';
import {ZzzService} from "../../services/zzz/zzz.service";
import {User} from "../../entities/User";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  ngOnInit() {
  }
  users:Array<User>;
  name:string;
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
    this.zzzService.post("user","del",{'id':id}).subscribe(e=>console.log(e));
    this.refresh();
  }
  addUser(){
    this.zzzService.post("user","add",{'name':this.name}).subscribe(e=>console.log(e));
    this.name = "";
    this.refresh();
  }
}
