import { Pipe, PipeTransform } from '@angular/core';
import { BookITransformed } from 'src/app/core/services/bookServices/book.models';

export const NUM_BOOKS_PAGE: number = 4;

@Pipe({
  name: 'pagination',
  pure: true
})
export class PaginationPipe implements PipeTransform {

  transform(value: BookITransformed[], page: number): BookITransformed[]{
    const pageStart = NUM_BOOKS_PAGE * (page - 1);
    const pageEnd = NUM_BOOKS_PAGE * page;

    return value.slice(pageStart,pageEnd);
  }

}
