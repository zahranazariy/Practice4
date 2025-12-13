import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private data: BookItem[] = [
    { id: 1, title: 'c++', writer: 'خودم', publisher: 'ابر', price: 290000, },
    { id: 2, title: 'پایگاه داده', writer: 'خودم', publisher: 'ابر', price: 562000, },
    { id: 3, title: 'مدار منطقی', writer: 'خودم', publisher: 'ابر', price: 500000, },
  ];
  list() {
    return [...this.data];
  }
  add(item: BookItem) {
    this.data.push(item);
  }


}
