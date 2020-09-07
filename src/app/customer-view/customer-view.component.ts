import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer/customer.service';
import { CustomerListModel } from '../customer/customer-list.model';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  customer:CustomerListModel

  constructor(private route:Router,private customerService:CustomerService) {
    this.customer = this.customerService.getCustomerByID(parseInt(localStorage.getItem('viewForm')))
    console.log(this.customer)
   }

  ngOnInit(): void {
    if(parseInt(localStorage.getItem('viewForm')) === 0 || localStorage.getItem('viewForm') === null){
        this.route.navigate(['customer/dashboard'])
    }

  }
  loadDashboard(){
    this.route.navigate(['customer/dashboard'])
    localStorage.removeItem('viewForm')
  }

}
