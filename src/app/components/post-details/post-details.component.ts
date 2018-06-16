import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ZzzService} from "../../services/zzz/zzz.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent{
  user;
  post;
  constructor(private aR:ActivatedRoute,private zzzService:ZzzService) {
    this.user = aR.snapshot.params['id'].split("|")[0];
    let post = aR.snapshot.params['id'].split("|")[1];
    this.post = zzzService.post("todo","get",{id:this.user}).subscribe(e=>{
      this.post = e.data.filter(e=>e.id === post)
    });
  }
  onClick(){
    console.log(this.post);
  }
}
