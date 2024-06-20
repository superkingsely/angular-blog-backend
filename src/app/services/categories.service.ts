import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { AlertComponent } from '../components/alert/alert.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private toastr: ToastrService){}
  // create(data:any){
  //   let collectionInit=collection(this.firestore,'categories')
  //   addDoc(collectionInit,data)
  //   .then((docRef)=>{
  //     console.log('data saved successfuly',docRef)
  //     this.toastr.success('successful!!');
  //     // to add sub collection
  //     // const objId=doc(this.firestore,`categories/${docRef.id}`)
  //     // const subcolRef=collection(objId,'sub-cat')
  //     // addDoc(subcolRef,{cat:'work oh'})
  //     // console.log('good')
  //   })
  //   .catch((err)=>{
  //     console.log(err.message)
  //   })
  // }
  // loading data to our app
  read(collectionName:string){
    // const colRef=collection(this.firestore,collectionName)
    // return collectionData(colRef,{idField:'id'}) as Observable<any[]>
  }
}
