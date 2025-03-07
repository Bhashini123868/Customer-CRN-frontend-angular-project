import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from "./page/login/login.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { AddCustomerComponent } from "./page/dashboard/add-customer/add-customer.component";
import { ManagecustomerComponent } from "./page/dashboard/managecustomer/managecustomer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, LoginComponent, DashboardComponent, AddCustomerComponent, ManagecustomerComponent]
})
export class AppComponent implements OnInit {
  title = 'customer_crn_frontend_app';

  ngOnInit(): void {
    initFlowbite();
  }
}