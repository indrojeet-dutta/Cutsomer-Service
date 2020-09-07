import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerListModel } from '../customer/customer-list.model';
import { CustomerService } from '../customer/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @ViewChild('f') form:NgForm

  constructor(private route:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  onAddCustomer(){
    let customer: CustomerListModel = {
      id:(this.customerService.getCustomerList().length)+1,
      name:this.form.value.name,
      email:this.form.value.email,
      phone:this.form.value.phone,
      address:this.form.value.address,
      description:this.form.value.description
    }
    this.customerService.addCustomer(customer)
    this.route.navigate(['customer/dashboard'])
    // console.log(form.value)
  }

  loadDashboard(){
    this.route.navigate(['customer/dashboard'])
  }

}
