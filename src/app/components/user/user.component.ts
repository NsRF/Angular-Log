import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {UserInterface} from "../../interfaces/user.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: UserInterface[] = [];
  editEnabled = false;
  clonedUsers: { [s: string]: UserInterface; } = {};
  users2: UserInterface[] = [];
  constructor(private userService: UserService, private router: Router) { }

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
