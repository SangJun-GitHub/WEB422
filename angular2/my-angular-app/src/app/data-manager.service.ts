import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, Post, Comment} from "./vm-typicode";
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private teachers: string[] =[];
  private url = "https://jsonplaceholder.typicode.com";
  
  constructor(private http: HttpClient) {
    this.teachers.push('Pat');
    this.teachers.push('Peter');
    this.teachers.push('Sharmin');
    this.teachers.push('Sunny');
    this.teachers.push('James');
   }

   getTeachers(){
     return this.teachers;
   }
   getPosts(): Observable<Post[]>{
     return this.http.get<Post[]>(`${this.url}/posts`)
   }

   getComments():Observable<Comment[]>{
     return this.http.get<Comment[]>(`${this.url}/comments`)
   }

   getUsers(): Observable<User[]>{
     return this.http.get<User[]>(`${this.url}/users`)
   }
}
