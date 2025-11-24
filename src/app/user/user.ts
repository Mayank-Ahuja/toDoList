import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})

export class User {

  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath():string {
    return 'images/users/'+ this.selectedUser.avatar;
  }

  onSelectUser() {
    console.log('clicked on: ', this.selectedUser);
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
    console.log('user after update: ', this.selectedUser);
  }

}
