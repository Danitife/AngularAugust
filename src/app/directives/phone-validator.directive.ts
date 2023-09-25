import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  providers:[
    {provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}
  ]
})
export class PhoneValidatorDirective {

  constructor() { }

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
