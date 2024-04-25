import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  constructor(private postservice:PostService,private _snackBar: SnackbarService){}

  searchid = '';


  form = new FormGroup({
    id:new FormControl("",[Validators.required]),
    userid:new FormControl("",[Validators.required,Validators.pattern('^[0-9]$')]),
    title:new FormControl("",[Validators.required]),
    body:new FormControl("",[Validators.required])
  });

  updateData(){
    // console.log(this.form);
    // this.postservice.update(this.searchid,
    //   this.form.get('id')?.value,
    //   this.form.get('userid')?.value,
    //   this.form.get('title')?.value,
    //   this.form.get('body')?.value
    // )
    // .subscribe((responce)=>{
    //   if(responce){
    //     this._snackBar.snackBar('Updated','close');
    //   }
    // })



  }

  loadData(){
    // this.postservice.find(this.searchid).subscribe((responce)=>{
    // console.log(responce);
    // this.form.patchValue({
    //   id:responce[0].id,
    //   userid:responce[0].userId,
    //   title:responce[0].title,
    //   body:responce[0].body
    // })
    //
    // })

  }

}
