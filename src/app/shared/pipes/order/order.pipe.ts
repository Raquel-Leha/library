import { Pipe, PipeTransform } from '@angular/core';
import { BookITransformed } from 'src/app/core/services/bookServices/book.models';

@Pipe({
  name: 'order',
  pure: true
})

export class OrderPipe implements PipeTransform {
  transform(array: BookITransformed[], verSeleccion?: string): BookITransformed[] {
    if (!verSeleccion) {
      return array;
    } else if (verSeleccion == 'titulo') {
      console.log("titulo")
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
    } else {
      console.log("autor")
      const arraySorted = array.sort(
        (a: BookITransformed, b: BookITransformed) => {
          if (a.autor < b.autor) {
            return -1;
          } else if (a.autor > b.autor) {
            return 1;
          } else {
            return 0;
          }
        }
      );

      return arraySorted;
    }
  }
}