import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-onecontact',
  templateUrl: './onecontact.component.html',
  styleUrls: ['./onecontact.component.css']
})
export class OnecontactComponent {
  constructor(public paramsRoute: ActivatedRoute, public myTodo: StorageService ){}
  public ttodo:string = ""

  ngOnInit(): void{
    console.log(this.paramsRoute.snapshot.params['id']);
    let id = this.paramsRoute.snapshot.params["id"]
    let allTodo = this.myTodo.getTodo()
    this.ttodo = allTodo.find((el:string, index:number) => index == id)
    console.log(this.ttodo);
  }

}
