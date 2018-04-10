import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mask: boolean = true): string {
    return mask? value.replace(/./g, "*") : value;
  }

}
