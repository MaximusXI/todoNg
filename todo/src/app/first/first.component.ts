import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  list:any[];
  list2:any[];

  formdata:any;

  data:any;
 
  id:any;
  isAdmin:Boolean;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    console.log(this.id);



    this.list=[];
    this.list2=[];
   
    this.list=JSON.parse(localStorage.getItem("todo"))||[];
    this.list2=JSON.parse(localStorage.getItem("completed"))||[];
    //console.log("data is:"+this.data);
    this.formdata=new FormGroup({
      name:new FormControl("")
    })
  }

  addTask(){
   // console.log(text);
    //this.list.push(text);
    var now=new Date();
    //console.log(now.getHours().toLocaleString());
    const timeStamp=now.getDate().toLocaleString()+"/"+(+now.getMonth().toLocaleString() + +1)+"/"+now.getFullYear().toLocaleString().replace(",","")
     +" "+now.getHours().toLocaleString()+":"+now.getMinutes().toLocaleString()+":"+now.getSeconds().toLocaleString();

    console.log(timeStamp);
    console.log(this.formdata.controls['name'].value);

    const finalValue=this.formdata.controls['name'].value+" [ "+timeStamp+" ]";
    this.list.push(finalValue);

    localStorage.setItem("todo",JSON.stringify(this.list));
    this.list=JSON.parse(localStorage.getItem("todo"));
  }

  edit(x:any,value:any){
    
    console.log("to edit:"+x);
   console.log("value:"+value);
   
   var now=new Date();
   const timeStamp=now.getDate().toLocaleString()+"/"+(+now.getMonth().toLocaleString() + +1)+"/"+now.getFullYear().toLocaleString().replace(",","")
     +" "+now.getHours().toLocaleString()+":"+now.getMinutes().toLocaleString()+":"+now.getSeconds().toLocaleString();


   const index=this.list.indexOf(x);
   if(index>-1){
    this.list.splice(index,1);
  }

  value=value+" [ "+timeStamp+" ] ";
  this.list.push(value);
  localStorage.setItem("todo",JSON.stringify(this.list));


  }

  delete(x:any){
   // console.log(x);
    const index=this.list.indexOf(x);
    console.log(index);
  
    if(index>-1){
      this.list.splice(index,1);
    }
    console.log(this.list);

    localStorage.setItem("todo",JSON.stringify(this.list));
  }

  changeCheckBox(e,x:any){
    console.log(x);
    if(e.target.checked){
       console.log("checked");
       this.delete(x);
       this.list2.push(x);
       localStorage.setItem("completed",JSON.stringify(this.list2));



    }else{
       console.log("unchecked");



    }
  }

  addSubTask(x:any,value:any){
    console.log("task:"+x);
    console.log("Subtask:"+value);
  }

}
