import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';

@Component({
  selector: 'app-members-page',
  imports: [],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit{
  ngOnInit(): void {
this.dataRefresh();
  }
  data: MemberItem[] = [];
  membersService = inject(MembersService);
  dataRefresh() {
    this.data = this.membersService.list();
  }
  add() {
    this.membersService.add({ id: 4, name: ' آزمایش', telephone: 1111, },)
    this.dataRefresh();
  }


}
export interface MemberItem {
  id: number;
  name: string;
  telephone?: number;
}


