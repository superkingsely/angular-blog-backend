import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
// import {  collectionData, collection ,doc} from 'rxfire/database/firestore'
// import { Firestore } from 'rxfire/database/firestore'
// import { Firestore,addDoc,collection,doc } from '@angular/fire/firestore';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  // list!:Observable< any[]>;

  constructor(private catService:CategoriesService){}
  ngOnInit(): void {
    // this.list=this.catService.read('categories')
  }


  onSubmit(form:NgForm){
    // console.log(form)
    let categoryData:Category={
      category:form.value.category
    }
    console.log(categoryData)
    console.log(form)
    this.catService.create(categoryData)
    // check ur service file nw
    // let collectionInit=collection(this.firestore,'categories')
    // addDoc(collectionInit,categoryData)
    // .then((docRef)=>{
    //   console.log('data saved successfuly',docRef)
    //   // to add sub collection
    //   // const objId=doc(this.firestore,`categories/${docRef.id}`)
    //   // const subcolRef=collection(objId,'sub-cat')
    //   // addDoc(subcolRef,{cat:'work oh'})
    //   // console.log('good')
    // })
    // .catch((err)=>{
    //   console.log(err.message)
    // })
  }
}
