import { Component } from '@angular/core';

@Component({
  selector: 'app-task-btn',
  templateUrl: './task-btn.component.html',
  styleUrls: ['./task-btn.component.scss']
})
export class TaskBtnComponent {
  delete = {
    url: "../assets/delete.svg",
    alt: "delete"
  }
}
