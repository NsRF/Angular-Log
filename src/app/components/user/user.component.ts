import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {UserInterface} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: UserInterface[] = [];
  clonedUsers: { [s: string]: UserInterface; } = {};
  users2: UserInterface[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.returnAllUsers().subscribe(res => this.users = res);
  }
  onRowEditInit(user: UserInterface) {
    this.clonedUsers[user.id] = {...user};
  }

  onRowEditSave(user: UserInterface) {
    this.userService.updateUser(user).subscribe(x => console.log(x));
  }

  onRowEditCancel(user: UserInterface  , index: number) {
    this.users2[index] = this.clonedUsers[user.id];
    delete this.clonedUsers[user.id];
  }

}
