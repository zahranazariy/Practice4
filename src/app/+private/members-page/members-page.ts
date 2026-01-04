import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseService } from '../../+shared/+base/base-service';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCrudPage<MemberItem> implements OnInit{
  ngOnInit(): void {
    this.dataRefresh;
  }
override setService=inject(MembersService);
  
}

export interface MemberItem  extends Thing{
  fullname: string;
  mobile: string;
  addres:string
}
