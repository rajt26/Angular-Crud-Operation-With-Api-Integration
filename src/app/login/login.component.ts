import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PhysicianRegisterService } from '../physician-register.service';
import { ToastrService } from 'ngx-toastr'
import {Router} from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  })

  constructor(private PhysicianRegisterService:PhysicianRegisterService,
    private toasterService:ToastrService,
    private router:Router) { }
  

  ngOnInit(): void {
  }

  onLogin(){
    this.PhysicianRegisterService.login(this.login.value)
    .subscribe((data)=>{
      this.toasterService.success('Login Successfully')
      this.router.navigate(['/home'])
    })
  }
}
