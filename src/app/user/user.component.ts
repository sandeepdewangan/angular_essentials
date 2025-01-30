import { Component } from '@angular/core';

import { users } from '../data';

const randomNum = Math.floor(Math.random() * users.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = users[randomNum];

  get imagePath() {
    return 'assets/' + this.selectedUser.avatar;
  }

  onUserSelected() {
    const randomNum = Math.floor(Math.random() * users.length);
    this.selectedUser = users[randomNum];
  }
}
