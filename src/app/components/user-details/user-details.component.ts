import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../entities/Post";
import {ZzzService} from "../../services/zzz/zzz.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{
  private details:Post;
  userId:number;
  activePost:Array<any>;
  post:Object ={
    name:"",
    desc:""
  };
  constructor(private aR:ActivatedRoute,private zzzService:ZzzService,private router:Router) {
    this.userId = aR.snapshot.params["id"];
    this.refresh();
  }
  refresh(){
    this.zzzService.post("todo","get",{id:this.userId}).subscribe(e=>this.details = e.data);
  }

  dellUser(id:number){
    this.zzzService.post("todo","delete",{'id':id}).subscribe(e=>console.log(e));
    this.refresh();
  }
  addUser(){
    this.zzzService.post("todo","add",
      {'id':this.userId,'name':this.post['name'],'desc':this.post['desc']}).subscribe(e=>console.log(e));
    this.post['name'] = "";
    this.post['desc'] = "";
    this.refresh();
  }

  postDetail(user:number) {
    this.router.navigate(['/postDetails',""+this.userId+"|"+user])
  }
}
