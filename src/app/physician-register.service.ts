import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhysicianRegisterService {

  constructor(private http: HttpClient) { }
  registerUrl = 'http://localhost:3000/create'
  loginUrl = 'http://localhost:3000/login'
  getUrl = 'http://localhost:3000/findAll'
  getIdUrl = 'http://localhost:3000/find'
  updateUrl = 'http://localhost:3000/update'
  deleteUrl = 'http://localhost:3000/delete'


  getList() {
    return this.http.get(this.getUrl)
  }
  register(data: any): Observable<any> {
    return this.http.post(this.registerUrl, data)
  }

  login(data: any) {
    return this.http.post(this.loginUrl, data)
  }

  getCurrentList(id: any) {
    return this.http.get(`${this.getIdUrl}/${id}`)
  }

  update(data: any) {
    return this.http.put(`${this.updateUrl}`, data)
  }

  delete(id: any) {
    return this.http.delete(`${this.deleteUrl}`, id)
  }
}
