import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private baseRoute = 'dashboard';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toRechargeBalance() {
    this.router.navigate([this.baseRoute, 'saldo']);
  }

  toRechargeStreaming() {
    this.router.navigate([this.baseRoute, 'streaming']);
  }

  toRechargeVideoGames() {
    this.router.navigate([this.baseRoute, 'videojuegos']);
  }
}
