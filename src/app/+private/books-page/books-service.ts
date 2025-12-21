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
  edit(item: BookItem) {
    const index = this.data.findIndex(b => b.id == item.id);
    if (index != -1) {
      this.data[index].title = item.title;
      this.data[index].writer = item.writer;
      this.data[index].publisher = item.publisher;
      this.data[index].price = item.price;
    }
  }
  remove(item: BookItem) {
  this.data=this.data.filter(b=>b.id!==item.id);
  }
}
