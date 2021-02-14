import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  EmpsList: any = []

  constructor(private service: SharedService) { }


  modal_title: string
  ActiveAddEditEmp: boolean = false
  emp: any

  ngOnInit(): void {
    this.refreshEmpList()
  }

  refreshEmpList() {
    this.service.getEmpList().subscribe(
      (data) => {
        this.EmpsList = data
      })
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: "",
      Department: "",
      PhotoFileName:"d.jpg"
    }
    this.modal_title = "Add Employee"
    this.ActiveAddEditEmp = true
  }


  closeClick() {
    this.ActiveAddEditEmp = false
    this.refreshEmpList()
  }
  editClick(emp: any) {
    this.emp = emp
    this.modal_title = "Edit Employee"
    this.ActiveAddEditEmp = true
  }
  deleteItem(emp: any) {
    if (confirm("Are you sure ?")) {
      this.service.deleteEmpList(emp.EmployeeId).subscribe((resdata) => {
        alert(resdata)
        this.refreshEmpList()
      })
    }

  }
  confirm(data: string) {
    alert(data)
  }

}
