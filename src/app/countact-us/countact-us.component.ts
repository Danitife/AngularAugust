import { Component } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-countact-us',
  templateUrl: './countact-us.component.html',
  styleUrls: ['./countact-us.component.css']
})
export class CountactUsComponent {

  constructor(public myTodo: StorageService){}
  public users:Array<string> = []
  ngOnInit(): void{
    this.users = this.myTodo.getTodo()
  }
}
