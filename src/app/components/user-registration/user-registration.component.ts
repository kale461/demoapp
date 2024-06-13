import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,UserprofileComponent],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

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

  registrationForm!:FormGroup;

  constructor(private router:Router){}

  ngOnInit():void{
    this.registrationForm = new FormGroup({
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
    this.router.navigate(['/']);

  }

  cancel(){
    this.router.navigate(['/']);
  }

  submit(){
    this.router.navigate(['/userprofile']);
    console.log(this.registrationForm.value);
  }
}
