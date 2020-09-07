import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerService } from './customer/customer.service';

const appRoutes:Routes = [
  { path: '', component:CustomerComponent },
  { path: 'customer/dashboard', component:DashboardComponent },
  { path:"customer/add", component:CustomerFormComponent },
  { path:"customer/edit", component:CustomerEditComponent },
  { path:"customer/view", component:CustomerViewComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerEditComponent,
    CustomerFormComponent,
    CustomerViewComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
