import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { User } from '../models/user';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'angular-test';
  private booleanValue = true;
  public users: User[] = [];

  constructor(private userService: UserDetailService) {

  }

  public ngOnInit(): void {
    this.getUsersFromService();
  }

  private getUsersFromService(): void{
    this.userService.getUsers().subscribe((usersData: User[]) => {
      this.users = usersData;
    });
  }

}
