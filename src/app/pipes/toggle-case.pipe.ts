import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, upper?: boolean): string {
    if(!upper) return value

    return value.toLocaleUpperCase()
  }

}
