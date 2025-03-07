import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managecustomer',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './managecustomer.component.html',
  styleUrl: './managecustomer.component.css'
})
export class ManagecustomerComponent {
  public customerList:any=[];
  constructor(private http:HttpClient){
    this.loadCustomer();
  }
  loadCustomer(){
    this.http.get("http://localhost:8081/customer/get-all").subscribe(data=>{
      console.log(data);
      this.customerList=data;
      
    })
  }
}
