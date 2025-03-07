import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  public username:string="saman";
  public customers =[
    {
      name:"saman",
      address:"kalutara",
      salary:"45000.0"
    },
    {
      name:"nimal",
      address:"panadura",
      salary:"75000.0"
    },
    {
      name:"sunil",
      address:"galle",
      salary:"85000.0"
    },
    {
      name:"kamal",
      address:"wadduwa",
      salary:"65000.0"
    },
    {
      name:"sumudu",
      address:"galle",
      salary:"65000.0"
    }
  ]

}
