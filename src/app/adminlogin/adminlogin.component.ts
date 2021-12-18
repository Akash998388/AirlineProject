import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  cFormGroup: FormGroup;
  member=new Member('','');
  submitted=false;

     constructor(private formBuilder: FormBuilder) {
    this.cFormGroup = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["" ,[Validators.required, this.validatePass]]
    });
  }
  // constructor(private formBuilder: FormBuilder) {
  //   this.cFormGroup = this.formBuilder.group({
  //     email:new FormControl(null,[Validators.required,Validators.email]),
  //     password:new FormControl ('', [Validators.required, Validators.minLength(8)]),
  //   });
  //  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    this.member.mail=this.cFormGroup.value.email;
    this.member.pass=this.cFormGroup.value.password;
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

}
