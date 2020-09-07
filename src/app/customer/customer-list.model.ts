export class CustomerListModel{
  public id:number
  public name:String
  public email:string
  public phone:number
  public address:string
  public description:string
  constructor(id:number,name:string,email:string,phone:number,address:string,description:string){
    this.id = id
    this.name  = name
    this.email = email
    this.phone = phone
    this.address = address
    this.description = description
  }
}
