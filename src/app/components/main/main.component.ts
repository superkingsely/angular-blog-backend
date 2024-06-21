import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnChanges{
  @Input()
  receiveappdata!:Array<any>;
  id!:number;
  newitem:string=''
  isedit:boolean=false
  editvalue:string=''
  editvalueobj!:any;
  // functions
  ngOnInit(): void {
    console.log(this.receiveappdata)
    // this.handlechange(this.id)
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  handlechange(id:number){
    this.id=id
    const resetdata=this.receiveappdata.map((item:any)=>{
      if(item.id===id){

        return {...item,checked:!item.checked}
      }else{
        return item;
      }
    })
    this.receiveappdata=resetdata;
    console.log('less see',this.receiveappdata)
  }
  handleadd(value:any){
    if(value!==''){

      const id=this.receiveappdata.length===0?1:this.receiveappdata.length+1
      const nwitem={id,checked:false,item:value}
      const addtoarry=[...this.receiveappdata,nwitem]
      this.receiveappdata=addtoarry
      this.newitem=''
    console.log(this.receiveappdata)

    }else{
      console.log('item is empty')
    }
  }
  handledelete(id:number){
    const resetdeldata=this.receiveappdata.filter((item:any)=>item.id!==id)
    const resetarry=resetdeldata.map((item:any,index:number)=>{
      return {...item,id:index+1}
    })
    this.receiveappdata=resetarry;
    console.log(this.receiveappdata)
  }
  handleedit(id:number){
    this.isedit=true
    if(this.isedit===true){
      const obj=this.receiveappdata.filter((item:any)=>item.id===id)[0]
      // this.editvalue=obj.item
      this.editvalueobj={item:obj.item,id:obj.id}
    }
  }
  handlesubmitedit(value:any){
    console.log(this.editvalueobj)
    const resetdata=this.receiveappdata.map((item:any)=>{
      if (item.id===this.editvalueobj.id){
        return {...item,item:value}
      }else{
        return item;
      }
    })
    this.receiveappdata=resetdata;
    this.isedit=false
    console.log(this.receiveappdata)
  }
}
