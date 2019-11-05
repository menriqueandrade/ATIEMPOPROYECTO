import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
@Component({
selector: 'app-task-add',
templateUrl: './task-add.component.html',
styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
constructor(private taskService: TaskService) { }
task: Task;
ngOnInit() {
this.task = new Task();
}
add() {
this.taskService.addTask(this.task)
.subscribe(task => {
alert('Se agrego una nueva tarea')
});
}
}
