import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Post from '../post/post';
import {AngularFirestore} from "@angular/fire/compat/firestore";



@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseurl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient, private firestoreservice:AngularFirestore) { }

  // getAll():Observable<any>{
  //   return this.http.get<any>(this.baseurl);
  // }
  getAllDataFireStore(){
    return this.firestoreservice.collection('post-data').valueChanges();
  }

  // find(id:any){
  //   return this.http.get<any>(`${this.baseurl}?id=${id}`);
  // }
  findDataFireStore(id:any){
    return this.firestoreservice.collection('post-data').doc(id).valueChanges();
  }


  // cerate(id:any,userid:any,title:any,body:any){
  //   return this.http.post(this.baseurl,{id,userid,title,body});
  // }
  createDataFireStore(post:Object){
    console.log(post)
      return new Promise((resolve,reject)=>{
        this.firestoreservice.collection('post-data').add(post)
          .then((res)=>{
            console.log(res)
          },(error)=>{
            console.log(error);
          });
      })
  }

  // update(searchid:any,id:any,userid:any,title:any,body:any):Observable<any>{
  //   return this.http.put(`${this.baseurl}/${searchid}`,{id,userid,title,body});
  // }
  updateDataFireStore(post:Post){
      return this.firestoreservice.collection('post-data').doc(post.id).update({
        userid:post.userid,
        title:post.title,
        body:post.body
      })
  }

  // delete(id:any){
  //   return this.http.delete(`${this.baseurl}/${id}`);
  // }
  deleteDataFireStore(id:any){
    return this.firestoreservice.collection('post-data').doc(id).delete()
  }

}
