import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              public auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate([''])
  }
}
