import { Component, OnInit } from '@angular/core';
import {PhysicianRegisterService} from '../physician-register.service';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    cpassword:new FormControl('')

  })

  constructor(private reg:PhysicianRegisterService,
              private toasterService:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
  } 

  collectregistrationDetail() {
    this.reg.register(this.registration.value)
    .subscribe((result:any)=>{
      console.log('toast');
      
      this.toasterService.success('Registered Successfully')
      this.router.navigate(['/login'])
    })
  }
}
