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
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.returnAllUsers().subscribe(res => this.users = res);
  }

  editUser() {
    this.editEnabled = !this.editEnabled;
  }

  saveUser(user: UserInterface) {
    this.userService.updateUser(user).subscribe(res => window.location.reload());
  }

  redirectToHome() {
    this.router.navigate(['/'])
  }

}
