import { Component } from '@angular/core';

@Component({
  selector: 'app-core-content',
  templateUrl: './core-content.component.html',
  styleUrls: ['./core-content.component.scss']
})
export class CoreContentComponent {

  //Deberia crear una interfaz y hacer el arreglo Tasks de esa
  // task = {
  //   id:0,
  //   title:'',
  //   description:'',
  //   isChecked:false
  // };

  tasks:any[] = [
  ];

  id:number = 0;

  addTaskToList(newTask:string){
    this.id++
    this.tasks.unshift({title: newTask, id:this.id, isChecked:false});
  }
}
