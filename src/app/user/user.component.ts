import { Component, computed, signal } from '@angular/core';

import { users } from '../data';

const randomNum = Math.floor(Math.random() * users.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(users[randomNum]);
  imagePath = computed(() => 'assets/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/' + this.selectedUser.avatar;
  // }

  onUserSelected() {
    const randomNum = Math.floor(Math.random() * users.length);
    this.selectedUser.set(users[randomNum]);
  }
}
