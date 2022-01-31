import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'borzo';
   courierform = new FormGroup({
    pickupaddress: new FormControl(''),
    deliveryaddress: new FormControl(''),
  });
  pickupadd='';
  deliveryadd='';
  show:boolean=false;
  bookcouriershow:boolean=true;
  msgsshow:boolean=false;
  msg='';
  disbutton=true;
  
  pdform=new FormGroup({
    fromname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*$')]),
    fromphonenumber: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    toname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*$')]),
    tophonenumber: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    courieritem: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*$')]),
    weight: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{1,2}$')]),
  });

 senttoPDpage()
  {
    this.pickupadd=this.courierform.controls['pickupaddress'].value;
  this.deliveryadd =this.courierform.controls['deliveryaddress'].value;
    if(this.pickupadd && this.deliveryadd)
    {
     this.show=true;
     this.bookcouriershow=false;
     this.msgsshow=false;
    }
    else{
      this.msgsshow=true;
      this.msg="Please enter pick-up and delivery address";
    }
  }
  makepayment()
    {
     
      if(this.pdform.valid)
      {
        
        alert("Thank you for booking with us "+this.pdform.controls['fromname'].value + " You will receive your booking id via sms")
        this.pdform.reset();
        this.show=false;
        this.bookcouriershow=true;
        this.courierform.reset();
        
      }
      
      else{
      alert("Please fill the form with valid values")
      }
      
     
    }
    isDisabled()
  {
    if(this.pdform.valid)
    {
      this.disbutton=false;
     
      
    }
    
    return this.disbutton;
  }   
  }
