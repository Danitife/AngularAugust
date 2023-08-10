import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public route: Router){}

  name = "Daniel"
  public todo = ""
  public date = new Date()
  public allTodo:Array<string> = []

  ngOnInit():void{
    console.log(localStorage.getItem("todo"));
    // this.allTodo = JSON.parse(localStorage.getItem("todo") !) || []
    this.allTodo = JSON.parse(localStorage["todo"]) || []
  }
  addTodo(){
    console.log(this.todo);
    this.allTodo.push(this.todo)
    localStorage.setItem("todo", JSON.stringify(this.allTodo))
    this.route.navigate(["contact"])
  }
  delTodo(i:number){
    
  }
}
