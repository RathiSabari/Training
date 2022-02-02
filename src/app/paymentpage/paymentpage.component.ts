import { Component, Input, OnInit } from '@angular/core';
import { BillcalcService } from '../billcalc.service';



@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {
 bill;
 weightofParcel;
 priceperkg;
  constructor( billcalc:BillcalcService)
  {
   this.bill=billcalc;
   this.weightofParcel=this.bill.getvalofweight();
   this.priceperkg=this.bill.getvalofprice();

  }

 
  
  

  

  ngOnInit(): void {
  }

}
