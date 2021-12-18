import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { LogiService } from '../logi.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  aFormGroup: FormGroup;
  member=new Member('','');
  submitted=false;
  public us:any;


  

  constructor(private formBuilder: FormBuilder,private service:LogiService,private router:Router) {
    this.aFormGroup = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["" ,[Validators.required, this.validatePass]]
    });
  }

  ngOnInit(): void {
    //this.getUserdata();

  }
 /* private getUserdata():void
  {
    this.service.getUser().subscribe(result => {this.us = result})
    
  } */
  // onSubmit(){
  //   this.submitted=true;
  //   this.member.mail=this.aFormGroup.value.email;
  //   this.member.pass=this.aFormGroup.value.password;
  // }
  onSubmit(){
    this.service.getUser(this.aFormGroup.value)
    .subscribe(
      (response)=>{
      this.router.navigateByUrl('/selectseat')
    }
    )
  }
  validatePass(c:FormControl){
let lower=/(?=.*[a-z])/.test(c.value);
let upper=/(?=.*[A-Z])/.test(c.value);
let special=/(?=.*[!@#$%^&*?/])/.test(c.value);
let length=/(?=.{8,20})/.test(c.value);
let numeric=/(?=.*[0-9])/.test(c.value)

const valid=lower&&upper&&special&&length&&numeric;
if(!valid){
  return {passError:{message:"Password length should be greater than 7 and contains atleast one uppercase,one lowercase,one numeric value "}}
}
else{
  return null;
}

  }
  // rSubmit(item){
  //   if(this.aFormGroup.value.email==item.email && this.aFormGroup.value.password==item.password){
  //     this.router.navigate(['/selectseat'])
  //   }
  //   else{
  //     alert()
  //   }
  
  }


