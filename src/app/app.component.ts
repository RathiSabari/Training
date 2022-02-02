import { compileDeclareClassMetadata } from '@angular/compiler';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray} from '@angular/forms';
import {Router} from '@angular/router'; 
import { BillcalcService } from './billcalc.service';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //constructor(){} 
  constructor(private route:Router,private billcalc:BillcalcService)
  {
   
  }
  //title = 'borzo';
   courierform = new FormGroup({
    pickupaddress: new FormControl(''),
    deliveryaddress: new FormControl(''),
  });
  pickupadd='';
  deliveryadd='';
  show:boolean=false;
  showbf:boolean=true;
  bookcouriershow:boolean=true;
  msgsshow:boolean=false;
  msg='';
  disbutton=true;
  weights=0;
  //@ViewChild(PaymentpageComponent)
  //weight:0;
  
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
        
       // alert("Thank you for booking with us "+this.pdform.controls['fromname'].value + " You will receive your booking id via sms")
       this.showbf=false;
       this.bookcouriershow=false;
       this.show=false;
       this.weights=this.pdform.controls['weight'].value;
       this.billcalc.setval(this.weights)
       this.route.navigate(['/app-paymentpage'])
        
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
