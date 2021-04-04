import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shosen-user',
  templateUrl: './shosen-user.component.html',
  styleUrls: ['./shosen-user.component.css']
})
export class ShosenUserComponent implements OnInit {

  shosenUser: User;
  id: any;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(() => {
      this.activatedRoute.params.subscribe(value => console.log(value));
      this.activatedRoute.params.subscribe(value => this.id = value);
      console.log(this.id.id);
    });
    console.log(this.id.id);
  }

  ngOnInit(): void {
    this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users' + '/' + this.id.id)
      .subscribe(value => this.shosenUser = value);
  }

}
