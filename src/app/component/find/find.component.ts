import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {

  constructor(private postservice:PostService){}

  searchid = '';
  list:Array<any>=[];

  loadData(){
    // this.postservice.find(this.searchid).subscribe((responce)=>{
    // this.list = responce;
    // })

  }
}
