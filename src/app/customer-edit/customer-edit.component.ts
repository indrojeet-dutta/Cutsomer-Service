import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerListModel } from '../customer/customer-list.model';
import { CustomerService } from '../customer/customer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  @ViewChild('f') form:NgForm

  customer: CustomerListModel

  constructor(private customerService:CustomerService,private route:Router) {
    this.customer = this.customerService.getCustomerByID(parseInt(localStorage.getItem('editForm')))
    console.log(this.customer)
  }

  ngOnInit(): void {
    if(parseInt(localStorage.getItem('editForm')) === 0 || localStorage.getItem('editForm') === null)
    this.route.navigate(['customer/dashboard'])
  }

  editCustomer(){
    let updateCustomer: CustomerListModel ={
      id: parseInt(localStorage.getItem('editForm')),
      name:this.form.value.name,
      email:this.form.value.email,
      phone:this.form.value.phone,
      address:this.form.value.address,
      description:this.form.value.description
    }
    this.customerService.editCustomer(updateCustomer)
    this.route.navigate(['customer/dashboard'])
  }

  loadDashboard(){
    this.route.navigate(['customer/dashboard'])
  }

}
