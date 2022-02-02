import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillcalcService {
   weightofparcel=0;
  price=40;Amount=0;
  constructor() { 


  }
  
  setval(wyt:any)
  {
    this.weightofparcel=wyt;
 
  }
  getvalofprice()
  {
    return (this.price);
  }
  getvalofweight()
  {
    return(this.weightofparcel);
  }
  /*calc()
  {
    this.Amount=this.weightofparcel*this.price;
   return(this.Amount)
  }*/
}
