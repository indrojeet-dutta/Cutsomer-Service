import { CustomerListModel } from './customer-list.model';

export class CustomerService{
  private customerList:CustomerListModel[]=[]

  getCustomerList(){
    if(localStorage.getItem('customers') === null){
      this.customerList = []
    }
    else{
      this.customerList = JSON.parse(localStorage.getItem('customers'))
    }
    return this.customerList.sort((a,b) => a.id - b.id)
  }

  getCustomerByID(id: number){
    if(localStorage.getItem('customers') === null){
      this.customerList = []
    }
    else{
      this.customerList = JSON.parse(localStorage.getItem('customers'))
    }
    return this.customerList.find(x=>x.id === id)
  }

  addCustomer(customer: CustomerListModel){
    this.customerList.push(customer)
    //implementing local storage to add customers
    localStorage.setItem('customers',JSON.stringify(this.customerList))
  }

  editCustomer(updateCustomer: CustomerListModel){
    if(localStorage.getItem('customers') === null){
      this.customerList = []
    }
    else{
      this.customerList = JSON.parse(localStorage.getItem('customers'))
    }

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
