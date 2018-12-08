import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";

import { Post } from "./vm-typicode";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  // Fields

  teachers: string[];
  constructor(private m: DataManagerService) { }

  ngOnInit() {
    this.getTeachers();

  }

  // Functions

  getTeachers(): void {
    this.teachers = this.m.getTeachers();
  }

}