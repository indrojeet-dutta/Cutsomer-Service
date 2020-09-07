import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerListModel } from '../customer/customer-list.model';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customerList = []
  customer: CustomerListModel
  constructor(private route:Router,private customerListService:CustomerService) { }

  ngOnInit(): void {
    this.customerList = this.customerListService.getCustomerList()
  }
  onEditCustomer(id:number){
    localStorage.setItem('editForm',id.toString())
    this.route.navigate(['customer/edit'])
  }
  onViewCustomer(id: number){
    localStorage.setItem('viewForm',id.toString())
    this.route.navigate(['customer/view'])
  }
  addCustomer(){
    this.route.navigate(['customer/add'])
  }

}
