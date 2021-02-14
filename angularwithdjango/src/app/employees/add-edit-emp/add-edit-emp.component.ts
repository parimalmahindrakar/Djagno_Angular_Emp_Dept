import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp: any

  EmployeeId:string
  EmployeeName: string
  Department: string
  PhotoFileName: string
  PhotoFilePath: string
  DateOfJoining:string
  DeptsList:any = []


  ngOnInit(): void {
    this.loadDeptsList()
  }

  loadDeptsList() {
    this.service.getAllDeptNames().subscribe((resdata: any) => {
      
      this.DeptsList = resdata
      this.EmployeeId = this.emp.EmployeeId
      this.EmployeeName = this.emp.EmployeeName
      this.Department = this.emp.Department
      this.DateOfJoining = this.emp.DateOfJoining
      this.PhotoFileName = this.emp.PhotoFileName
      this.PhotoFilePath = this.service.photourl + this.PhotoFileName
      
    })
  }
  addEmployee() {
    var val = {
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      PhotoFileName:this.PhotoFileName
    }
    this.service.addEmpList(val).subscribe((resdata) => {
      alert(resdata.toString())
    })
  }


  updateEmployee() {
    var val = {
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      PhotoFileName: this.PhotoFileName,
      EmployeeId:this.EmployeeId
    }
    this.service.updateEmpList(val).subscribe((resdata) => {
      alert(resdata.toString())
    })
  }


  uploadPhoto(event:any) {
    var file = event.target.files[0]
    const formData: FormData = new FormData()
    formData.append('uploadedFile', file, file.name)
    this.service.uploadPhoto(formData).subscribe(res => {
      this.PhotoFileName = res.toString()
      this.PhotoFilePath = this.service.photourl+this.PhotoFileName
    })
  }

}
