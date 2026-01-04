import { Injectable } from '@angular/core';
import { BookItem } from './books-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService<BookItem> {
  override data: BookItem[] = [
    { id: 1, title: 'c++', writer: 'خودم', publisher: 'ابر', price: 290000, },
    { id: 2, title: 'پایگاه داده', writer: 'خودم', publisher: 'ابر', price: 562000, },
    { id: 3, title: 'مدار منطقی', writer: 'خودم', publisher: 'ابر', price: 500000, },
  ];

  override update(destination: BookItem, source: BookItem): void {
    destination.title = source.title;
    destination.writer = source.writer;
    destination.publisher = source.publisher;
    destination.price = source.price;
  }
}
