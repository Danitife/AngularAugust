import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() sendToChild = "";
  @Output() emitMsg = new EventEmitter()
  public msgToParent = ""

  sendToParent(){
    this.emitMsg.emit(this.msgToParent)
  }
}
