import { CustomerListModel } from './customer-list.model';

export class CustomerService{
  private customerList:CustomerListModel[]=[]

  //fetch customer details
  getCustomerList(){
    if(localStorage.getItem('customers') === null){
      this.customerList = []
    }
    else{
      this.customerList = JSON.parse(localStorage.getItem('customers'))
    }
    return this.customerList.sort((a,b) => a.id - b.id)
  }

  //fetch specific customer by ID
  getCustomerByID(id: number){
    if(localStorage.getItem('customers') === null){
      this.customerList = []
    }
    else{
      this.customerList = JSON.parse(localStorage.getItem('customers'))
    }
    return this.customerList.find(x=>x.id === id)
  }

  //add new customer
  addCustomer(customer: CustomerListModel){
    this.customerList.push(customer)
    //implementing local storage to add customers
    localStorage.setItem('customers',JSON.stringify(this.customerList))
  }

  //edit customer details
  editCustomer(updateCustomer: CustomerListModel){
    if(localStorage.getItem('customers') === null){
      this.customerList = []
    }
    else{
      this.customerList = JSON.parse(localStorage.getItem('customers'))
    }

   //sorting customer list by ID
   this.customerList.forEach((cur, index) => {
    if(updateCustomer.id === cur.id){
      this.customerList.splice(index, 1)
    }
  })
  this.customerList.unshift(updateCustomer)
  localStorage.setItem('customers',JSON.stringify(this.customerList))
  localStorage.setItem('editForm','0')
  }
}
