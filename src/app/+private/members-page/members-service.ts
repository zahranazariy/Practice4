import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseService<MemberItem> {
  override data: MemberItem[] = [];
}


