import { Component } from '@angular/core';
import { UserListFacade } from './facades/user-list.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  constructor(
    public userListFacade: UserListFacade
  ) {
    this.userListFacade.initUserList();
  }
}
