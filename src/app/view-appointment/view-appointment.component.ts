import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  
})
export class ViewAppointmentComponent implements OnInit {
allApps:any
  constructor(private service:UserService) { }

  

  ngOnInit() {
    this.service.getfitnessdata().subscribe((data) => {
      this.allApps = data;
    });
    
  }
  delete(id)
  {
    console.log(id);
    alert("Appointment Deleted!")
    return this.service.deletefinessdata(id).subscribe((data) => {
      this.ngOnInit();
    });
  }
  
  getfitness() {
    
  }
}
