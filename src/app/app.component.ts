import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';

  public name = "Daniel"
  public num1 = 5
  public num2 = 7

  ngOnInit():void{
    
  }
}
