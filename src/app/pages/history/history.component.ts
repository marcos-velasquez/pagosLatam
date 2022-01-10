import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  categories = [
    {
      name: 'RECARGA SALDO',
      value: 'SALDO',
    },
    {
      name: 'RECARGA STREAMING',
      value: 'STREAMING',
    },
    {
      name: 'RECARGA VIDEOJUEGOS',
      value: 'GAME',
    },
  ];

  products = [
    {
      image: 'assets/images/background/authentication.jpg',
      name: 'MOVISTAR',
      status: 'pendiente',
      price: 555,
      category: 'recarga saldo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
