import { Pipe, PipeTransform } from '@angular/core';
import { BookITransformed } from 'src/app/core/services/book.models';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {

  transform(array: BookITransformed[]): BookITransformed[] {
    const arraySorted = array.sort(
      (a: BookITransformed, b: BookITransformed) => {
       
            if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
              return -1;
            } else if (a.titulo > b.titulo) {
              return 1;
            } else {
              return 0;
            }
    
      }

    );
  
    return arraySorted;
  }
}
