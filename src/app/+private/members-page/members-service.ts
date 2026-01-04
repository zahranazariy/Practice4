import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseService<MemberItem> {
  override data: MemberItem[] = [
    { id: 1, fullname: 'رضا مولایی', addres: 'شیراز', mobile: '09121233344' },
    { id: 2, fullname: 'مینو احمدی', addres: 'همدان', mobile: '09104565797' },
    { id: 3, fullname: 'سامان مولایی', addres: 'تهران', mobile: '09184546556' }
  ];
  override update(destination: MemberItem, source: MemberItem): void {
    destination.fullname = source.fullname;
    destination.mobile = source.mobile;
    destination.addres=source.addres;
  }
}


