import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  DeptsList : any = []

  constructor(private service: SharedService) { }


  modal_title: string
  ActiveAddEditDept: boolean = false
  dept:any

  ngOnInit(): void {
    this.refreshDeptList()
  }

  refreshDeptList() {
    this.service.getDeptList().subscribe(
      (data) => {
        this.DeptsList = data
    })
  }

  addClick() {
    this.dept = {
      DepartmentId: 0,
      DepartmentName : ""
    }
    this.modal_title = "Add Department"
    this.ActiveAddEditDept = true
  } 


  closeClick() {
    this.ActiveAddEditDept = false
    this.refreshDeptList()
  }
  editClick(dept: any) {
    this.dept = dept
    this.modal_title = "Edit Department"
    this.ActiveAddEditDept = true
  }
  deleteItem(dept: any) {
    if (confirm("Are you sure ?")) {
      this.service.deleteDeptList(dept.DepartmentId).subscribe((resdata) => {
        alert(resdata)
        this.refreshDeptList()
      })
    }
    
  }
  confirm(data: string) {
    alert(data)
  }

}
