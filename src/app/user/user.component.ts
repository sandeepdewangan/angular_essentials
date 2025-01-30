import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;

  // name and avatar are read only fields.
  name = input.required<string>();
  avatar = input.required<string>();

  // angular will recompute the imagePath, only when avatar value changes.
  imagePath = computed(() => 'assets/' + this.avatar());

  // get imagePath() {
  //   return 'assets/' + this.avatar;
  // }

  onUserSelected() {

  }
}
