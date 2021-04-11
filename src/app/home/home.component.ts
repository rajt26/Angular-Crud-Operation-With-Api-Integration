import { Component, OnInit } from '@angular/core';
import { PhysicianRegisterService } from '../physician-register.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private PhysicianRegisterService: PhysicianRegisterService) { }

  physicians: any[] = []
  ngOnInit(): void {
    this.PhysicianRegisterService.getList().subscribe((res: any) => {
      this.physicians = res
      console.log(this.physicians);

    })
  }
  deletePhysician(id: any) {
    this.PhysicianRegisterService.delete(id).subscribe((result) => {
      console.log('result', result);

    })
  }

}
