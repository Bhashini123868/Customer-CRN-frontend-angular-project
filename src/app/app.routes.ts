import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AddCustomerComponent } from './page/dashboard/add-customer/add-customer.component';
import { ManagecustomerComponent } from './page/dashboard/managecustomer/managecustomer.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path:"",
        component: LoginComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        children:[
            {
                path: "add-customer",
                component: AddCustomerComponent
            },
            {
                path: "managecustomer",
                component: ManagecustomerComponent
            }
        ]
    },
];
