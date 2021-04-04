import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => this.users = value);
  }

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => this.users = value);
  }

}
