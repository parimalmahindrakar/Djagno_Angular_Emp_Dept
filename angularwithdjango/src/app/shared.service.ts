import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  readonly url = "http://127.0.0.1:8000"
  readonly photourl = "http://127.0.0.1:8000/media/"

  constructor(private http: HttpClient) { }
  getDeptList(): Observable<any> {
    return this.http.get<any[]>(this.url +"/department")
  }
  addDeptList(val:any) {
    return this.http.post(this.url + "/department",val)
  }
  updateDeptList(val: any) {
    return this.http.put(this.url + "/department", val)
  }
  deleteDeptList(val: any) {
    return this.http.delete(this.url + "/department/"+val)
  }


  getEmpList(): Observable<any> {
    return this.http.get<any[]>(this.url + "/employee")
  }
  addEmpList(val: any) {
    return this.http.post(this.url + "/employee", val)
  }
  updateEmpList(val: any) {
    return this.http.put(this.url + "/employee", val)
  }
  deleteEmpList(val: any) {
    return this.http.delete(this.url + "/employee/"+ val)
  }


  uploadPhoto(val: any) {
    return this.http.post(this.url + "/save_file", val)
  }


  getAllDeptNames(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/department")
  }
}
