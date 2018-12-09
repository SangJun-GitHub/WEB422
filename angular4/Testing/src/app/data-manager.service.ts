import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  private teachers: string[] = [];

    constructor(private http: HttpClient) { 
    this.teachers.push('Pat');
    this.teachers.push('Peter');
    this.teachers.push('Sharmin');
    this.teachers.push('Sunny');
    this.teachers.push('James');
  }

  getTeachers() {
    return this.teachers;
  }

}

