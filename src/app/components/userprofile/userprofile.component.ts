import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {
  
  firstname:string='';
  lastname:string='';
  email:string='';
  number:string='';
  age:string='';
  State:string='';
  Country:string='';
  Address:string='';
  tags:string='';
  checkbox:boolean=false;

  showEdit=false;
  url='../assets/userprofile.png';

  EditForm!:FormGroup;

  ngOnInit():void{

    this.EditForm = new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl(),
      'email': new FormControl(),
      'number': new FormControl(),
      'age':new FormControl(),
      'State':new FormControl(),
      'Country':new FormControl(),
      'Address': new FormControl(),
      'tags': new FormControl(),
      'checkbox': new FormControl()
    });

  }


  close(){
    this.showEdit=false;

  }

  cancel(){
    this.showEdit=false;

  }
  edit(){
    this.showEdit=true;
  }
  

  selectimage(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
    else
    {
      this.url='../assets/userprofile.png';

    }
  }

 

}
