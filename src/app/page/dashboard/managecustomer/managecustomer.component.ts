import { Component } from '@angular/core';
import Customer from '../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-customer',
  imports: [CommonModule],
  templateUrl: './managecustomer.component.html',
  styleUrl: './managecustomer.component.css'
})
export class ManagecustomerComponent {

  customerList:Customer[] =[];

  constructor(private http:HttpClient){
    // new Customer(1,"saman",7500.0);

    // let customer:Customer ={
    //   id:1,
    //   name:"saman",
    //   salary:7500.0
    // }

    // let customerList:Customer[] = [
    //   new Customer(1,"saman",7500.0),
    //   new Customer(1,"saman",7500.0),
    //   new Customer(1,"saman",7500.0),
    // ]

    this.loadCustomer();
  }
  loadCustomer(){
    this.http.get<Customer[]>("http://localhost:8081/customer/get-all").subscribe(res=>{
      this.customerList=res;
      console.log(res);
    })
  }
}