import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: string [] = [];
  public todosForm = new FormGroup({
    todo: new FormControl('')
    });

   public onSubmit(): void {
   this.todos.push(this.todosForm.value.todo);
    }
}

