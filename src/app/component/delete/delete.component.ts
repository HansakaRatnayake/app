import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  list:Array<any>=[];

  constructor(private postservice:PostService,private _snackBar: SnackbarService){}

  ngOnInit(): void {
    this.postservice.getAllDataFireStore().subscribe((res)=>{
      console.log(res);
      this.list = res;
      console.log(this.list);


    })
  }

  delete(id:any){
    if(confirm(`Are you sure to delete ${id}`)){
      this.postservice.deleteDataFireStore(id)
        .then((res)=>{
          this._snackBar.snackBar('Deleted','close');

          for (let index = 0; index < this.list.length; index++) {
            if(this.list[index].id==id){
              this.list.splice(index,1);
              return;
            }

          }

      },(err)=>{
          console.log(err);
        });


    }

  }



  // delete(id:any){
  //   if(confirm(`Are you sure to delete ${id}`)){
  //     this.postservice.delete(id).subscribe((res)=>{
  //       if(res){
  //         this._snackBar.snackBar('Deleted','close');
  //
  //         for (let index = 0; index < this.list.length; index++) {
  //           if(this.list[index].id==id){
  //             this.list.splice(index,1);
  //             return;
  //           }
  //
  //         }
  //
  //
  //
  //       }
  //     });
  //
  //
  //   }
  //
  // }


}
