import { Pipe, PipeTransform } from '@angular/core';
import { BookITransformed } from 'src/app/core/services/bookServices/book.models';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: BookITransformed[], filterValue: string): BookITransformed[] {
    
    return value.filter((book) => book.titulo.toUpperCase().includes(filterValue.toUpperCase()));
  }

}
