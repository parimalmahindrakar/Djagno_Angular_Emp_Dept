import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentComponent } from "./department/department.component";
import { EmployeesComponent } from "./employees/employees.component";

const router: Routes = [
    {
        path:"employee" , component:EmployeesComponent
    },
    {
        path:"department", component:DepartmentComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}
