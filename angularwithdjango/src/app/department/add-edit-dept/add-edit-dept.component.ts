import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrls: ['./add-edit-dept.component.css']
})
export class AddEditDeptComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() dept: any
  DepartmentId: string
  DepartmentName :string
  

  ngOnInit(): void {
    this.DepartmentId = this.dept.DepartmentId
    this.DepartmentName = this.DepartmentName
  }

  addDepartMent() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName:this.DepartmentName
    }
    this.service.addDeptList(val).subscribe((resdata) => {
      alert(resdata.toString())
    })
  }


  updateDepartMent() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    }
    this.service.updateDeptList(val).subscribe((resdata) => {
      alert(resdata.toString())
    })
  }
  

}
