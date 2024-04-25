import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import Post from "../../post/post";
import {AuthService} from "../../services/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  private email: string = 'hndk2002@gmail.com';
  private password: string = '123456';

  constructor(private firestore: AngularFirestore,private postservice:PostService,private _snackBar:SnackbarService, private authService:AuthService){}

  form = new FormGroup({
    id:new FormControl("",[Validators.required,Validators.pattern('^[0-9]{3}$')]),
    userid:new FormControl("",[Validators.required,Validators.pattern('^[0-9]$')]),
    title:new FormControl("",[Validators.required]),
    body:new FormControl("",[Validators.required])
  });

  createData(){
    // console.log(this.form);
    // this.postservice.cerate(
    //   this.form.get('id')?.value,
    //   this.form.get('userid')?.value,
    //   this.form.get('title')?.value,
    //   this.form.get('body')?.value
    // )
    // .subscribe((responce)=>{
    //   if(responce){
    //     this._snackBar.snackBar('Saved','close');
    //   }
    // })

    // let post = new Post(
    //   this.form.get('id')?.value!,
    //   this.form.get('userid')?.value!,
    //   this.form.get('title')?.value!,
    //   this.form.get('body')?.value!
    // );

    let data = {
      id:this.form.get('id')?.value!,
      userid:this.form.get('userid')?.value!,
      title:this.form.get('title')?.value!,
      body:this.form.get('body')?.value!
    }

    this.authService.signInWithEmail(this.email, this.password)
      .then(() => {
        console.log('User signed in successfully.');
        // Optionally, navigate to another page or perform other actions after sign-in
      })
      .catch(error => {
        console.error('Error signing in:', error);
        // Handle sign-in error (e.g., display error message to user)
      });

    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        // User is authenticated, send data to Firestore
        this.firestore.collection('post-data').add({
          ...data,
          // Optionally, include the user's UID as a field in the document
          createdBy: user.uid
        }).then(() => {
          console.log('Data sent to Firestore successfully.');
        }).catch(error => {
          console.error('Error sending data to Firestore:', error);
        });
      } else {
        console.error('User is not authenticated.');
      }
    });
  }
    // this.postservice.createDataFireStore(post);




}
