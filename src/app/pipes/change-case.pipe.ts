import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeCase'
})
export class ChangeCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
