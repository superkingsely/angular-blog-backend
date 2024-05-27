import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firestore, collectionData, collection,addDoc ,doc} from '@angular/fire/firestore'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private firestore:Firestore){

  }

  onSubmit(form:NgForm){
    // console.log(form)
    let categoryData={
      category:form.value.category
    }
    // console.log(categoryData)
    let collectionInit=collection(this.firestore,'categories')
    addDoc(collectionInit,categoryData)
    .then((docRef)=>{
      console.log('data saved successfuly',docRef)
      // to add sub collection
      // const objId=doc(this.firestore,`categories/${docRef.id}`)
      // const subcolRef=collection(objId,'sub-cat')
      // addDoc(subcolRef,{cat:'work oh'})
      // console.log('good')
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
}
