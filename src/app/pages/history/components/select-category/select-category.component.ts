import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '@pages/history/enums/category.enum';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
})
export class SelectCategoryComponent implements OnInit {
  @Output() onBalances = new EventEmitter();
  @Output() onStreaming = new EventEmitter();
  @Output() onVideoGames = new EventEmitter();

  private actions: Map<Category, EventEmitter<any>> = new Map();
  categories = [
    {
      name: 'RECARGA SALDO',
      value: Category.BALANCE,
    },
    {
      name: 'RECARGA STREAMING',
      value: Category.STREAMING,
    },
    {
      name: 'RECARGA VIDEOJUEGOS',
      value: Category.VIDEOGAMES,
    },
  ];

  constructor() {
    this.actions.set(Category.BALANCE, this.onBalances);
    this.actions.set(Category.STREAMING, this.onStreaming);
    this.actions.set(Category.VIDEOGAMES, this.onVideoGames);
  }

  ngOnInit(): void {}

  search(event: any) {
    this.actions.get(event.value).emit();
  }
}
