import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public savedTodo: TodoService){}
  public todo:string = "Daniel"
  public AllTodo:Array<string> = [];
  public showTable:boolean = false
  public namesArr = ["daniel", "samuel", "victor"]
  ngOnInit():void {
    this.AllTodo = this.savedTodo.getTodo() || []
    // localStorage["allTodo"] == undefined ? this.AllTodo = [] : this.AllTodo = JSON.parse(localStorage["allTodo"])
  }

  addTodo(){
    this.AllTodo.push(this.todo);
    localStorage.setItem("allTodo", JSON.stringify(this.AllTodo))
    console.log(this.AllTodo);
  }
  delTodo(id:number){
    this.AllTodo.splice(id, 1);
    localStorage.setItem("allTodo", JSON.stringify(this.AllTodo))
  }
  toggleTable(){
    this.showTable = !this.showTable
    console.log(this.todo);
    
  }
}
