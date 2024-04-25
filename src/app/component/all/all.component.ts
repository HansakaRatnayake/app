import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  list:Array<any>=[];

  constructor(private postservice:PostService){}

  ngOnInit(): void {
    this.postservice.getAllDataFireStore().subscribe((res)=>{
      console.log(res);
      this.list = res;
      console.log(this.list);


    })
    // console.log(this.postservice.getAllDataFireStore())
  }

}
