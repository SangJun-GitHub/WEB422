import { Component, OnInit } from '@angular/core';
import { DataManagerService} from "./data-manager.service";
import { Comment} from "./vm-typicode";

@Component({
  selector: 'app-bear',
  templateUrl: './bear.component.html',
  styleUrls: ['./bear.component.css']
})
export class BearComponent implements OnInit {
  comments: Comment[];
  constructor(private m : DataManagerService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    this.m.getComments().subscribe(comments => this.comments = comments)
  }

}
