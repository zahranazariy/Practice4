import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';
import { BaseCrudComponent, Column } from "../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCrudPage<MemberItem> implements OnInit {
  ngOnInit(): void {
    this.item = {
      fullname: '',
      addres: '',
      mobile: '',
    }
    this.dataRefresh;
  }
  override setService = inject(MembersService);
  override addPrepair(): void {
    this.item = {
      fullname: '',
      addres: '',
      mobile: '',
    }
  }
  memberColumns: Column[] = [
    { field: 'id', title: 'شناسه' },
    { field: 'fullname', title: 'نام و نام خانوادگی' },
    { field: 'addres', title: 'آدرس' },
    { field: 'mobile', title: 'موبایل' },
  ]
}

export interface MemberItem extends Thing {
  fullname: string;
  mobile: string;
  addres: string
}
