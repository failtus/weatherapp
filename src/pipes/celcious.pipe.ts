import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CelToFah'
})
export class CelciousToFahrenheit implements PipeTransform{
  transform(value, args) {
    return (value * (9/5)) + 32;
  }
}
