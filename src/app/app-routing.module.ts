import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path:'app-paymentpage', component:PaymentpageComponent}];

@NgModule({
  declarations: [PaymentpageComponent],
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
