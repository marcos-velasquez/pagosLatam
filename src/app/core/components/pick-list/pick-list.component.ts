import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss'],
})
export class PickListComponent implements OnInit {
  source: Product[] = [
    {
      image: 'assets/images/background/authentication.jpg',
      name: 'movistar',
      price: 15,
    },
  ];
  target?: Product[] = [];

  constructor() {}

  ngOnInit(): void {}
}
