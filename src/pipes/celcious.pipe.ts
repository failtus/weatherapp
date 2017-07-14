import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CelToFah'
})
export class CelciousToFahrenheit implements PipeTransform{
  transform(value, args) {
    if (value) {
      return ((value * (9/5)) + 32).toFixed(2);
    } else
    return value;   
  }
}
