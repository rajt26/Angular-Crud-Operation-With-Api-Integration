import { Component, OnInit } from '@angular/core';
import { PhysicianRegisterService } from '../physician-register.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-physician',
  templateUrl: './update-physician.component.html',
  styleUrls: ['./update-physician.component.css']
})
export class UpdatePhysicianComponent implements OnInit {

  update = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl('')

  })
  constructor(private physicianRegisterService: PhysicianRegisterService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.physicianRegisterService.getCurrentList(this.activatedRoute.snapshot.params.id).subscribe((result: any) => {
      this.update = new FormGroup({
        name: new FormControl(result.name),
        email: new FormControl(result.email),
      })

    })
  }

  updatePhysician() {
    this.physicianRegisterService.update({ id: this.activatedRoute.snapshot.params.id, data: this.update.value }).subscribe((result) => {
      console.log('result', result);
    })
  }

}
