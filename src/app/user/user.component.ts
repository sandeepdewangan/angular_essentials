import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;

  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
