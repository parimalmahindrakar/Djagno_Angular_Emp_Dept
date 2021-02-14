import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';
import { ShowDeptComponent } from './department/show-dept/show-dept.component';
import { AddEditDeptComponent } from './department/add-edit-dept/add-edit-dept.component';
import { ShowEmpComponent } from './employees/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employees/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeesComponent,
    ShowDeptComponent,
    AddEditDeptComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
