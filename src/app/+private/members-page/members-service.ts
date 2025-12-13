import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: MemberItem[] = [
    { id: 1, name: 'زهرا نظری', telephone: 213065, },
    { id: 2, name: 'امیر مولایی', telephone: 569854, },
    { id: 3, name: 'آنا رها', telephone: 635665, },
  ];
  list() {
    return [...this.data];
  }
  add(item:MemberItem){
    this.data.push(item);
  }
}
