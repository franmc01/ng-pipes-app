import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {

  transform(value: Hero[], query: string): Hero[] {
    if(!query) return value
    
    return value.filter((value) => value.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  }

}
