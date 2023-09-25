import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  constructor(public reactForm: FormBuilder){}
  public firstName:string = ""
  public phone_no:string = ""
  public date = new Date()

  public myForm = this.reactForm.group({
    f_name: ["", [Validators.required, Validators.minLength(5)]],
    phone_no: ["", this.validate]
  })
  validate(control: AbstractControl): {[key: string]: any} | null{
    if(control.value){
      console.log(control.value);
      
      if(control.value.indexOf("+") == -1){
        return {noCountryCode: true}
      }
    }
    return null
  }
}
