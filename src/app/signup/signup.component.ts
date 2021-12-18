import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  // providers: [DatePipe],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  bFormGroup: FormGroup;
  // currentDate= new Date();
  member=new Registration('','','','','','',0);
  submitted=false;
  public pass:string='';
  public confirm:string='';
  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.bFormGroup = this.formBuilder.group({
      title:new FormControl(null,[Validators.required]),
      firstName:new FormControl(null,[Validators.required]),
      lastName:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl ('', [Validators.required,this.validatePass]),
      confermPass:new FormControl ('', [Validators.required]),
      phoneNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("^[1-9]{1}[0-9]{9}$"),Validators.minLength(10),Validators.maxLength(10)]),
    },{
      validator:this.ConfirmedValidator('password','confermPass')
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    this.member.firstName=this.bFormGroup.value.firstName;
    this.member.lastName=this.bFormGroup.value.lastName;
    this.member.mail=this.bFormGroup.value.email;
    this.member.pass=this.bFormGroup.value.password;
    this.member.confermPass=this.bFormGroup.value.password;
    this.member.phoneNumber=this.bFormGroup.value.phoneNumber;
    console.log(this.bFormGroup.value);
  }
  // onAkash(){
  //    this.router.navigate(['/loginpage'])
  // }
  
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
       ConfirmedValidator(controlName: string, matchingControlName: string){
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
    }
    }