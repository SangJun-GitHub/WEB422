import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  teachers: string[];
  
  constructor(private m: DataManagerService) { }

  ngOnInit() {
    this.teachers = this.m.getTeachers();
  }

  getTeachers(): void {
    this.teachers = this.m.getTeachers();
  }

}
