import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, UsersReqresResponse} from "../shared/interfaces";
import {HttpClient} from "@angular/common/http";
import {PageEvent} from "@angular/material/paginator";
import {UserService} from "../shared/services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  usersList: User[] = []
  uSub: Subscription

  pageEvent: PageEvent
  pageNum: number = 1
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;


  constructor(private http: HttpClient, private userService: UserService) {

  }

  ngOnDestroy() {
    this.uSub.unsubscribe()
  }

  ngOnInit(): void {
    this.listUsers()
  }

  listUsers() {
    if (this.pageEvent) {
      this.pageNum = this.pageEvent.pageIndex + 1
    }

    this.uSub = this.userService.getUsers(this.pageNum).subscribe((response: UsersReqresResponse) => {
      this.usersList = response.data
      this.length = response.total
      this.pageSize = response.per_page
    })


  }
}
