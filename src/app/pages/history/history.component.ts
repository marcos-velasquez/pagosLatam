import { Component, OnInit } from '@angular/core';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { BalancesService } from '@models/balances/services/balances.service';
import { StreamingService } from '@models/streaming/services/streaming.service';
import { VideoGamesService } from '@models/videogames/services/videogames.service';
import { Charge } from '@app/models/core/interfaces/charge.interface';

enum Category {
  BALANCE,
  STREAMING,
  VIDEOGAMES,
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  private actions: Map<Category, Function> = new Map();
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
  cols: any[] = [];
  data: any[] = [];
  showGlobalSearch = false;
  charge: Charge[] = [];

  constructor(
    private toast: ToastService,
    private balancesService: BalancesService,
    private streamingService: StreamingService,
    private videoGamesService: VideoGamesService
  ) {
    this.actions.set(Category.BALANCE, this.balances);
    this.actions.set(Category.STREAMING, this.streaming);
    this.actions.set(Category.VIDEOGAMES, this.videoGames);
  }

  ngOnInit(): void {
    this.balances();
  }

  setData(data: any) {
    this.data = data;
  }

  balances = () => {
    this.balancesService
      .getAllByCurrentUser()
      .then((balances) => {
        this.cols = [{ header: 'TELÉFONO DESTINO', field: 'phoneTarget' }];
        this.setData(balances);
      })
      .catch((error) => this.toast.error(error.code));
  };

  streaming = () => {
    this.streamingService
      .getAllByCurrentUser()
      .then((streaming) => {
        this.cols = [];
        this.setData(streaming);
      })
      .catch((error) => this.toast.error(error.code));
  };

  videoGames = () => {
    this.videoGamesService
      .getAllByCurrentUser()
      .then((videogames) => {
        this.cols = [
          { header: 'PLAYER ID', field: 'playerId' },
          { header: 'INFORMACIÓN ADICIONAL', field: 'additionalField' },
        ];
        this.setData(videogames);
      })
      .catch((error) => this.toast.error(error.code));
  };

  search(event: any) {
    this.actions.get(event.value)();
    event.value === Category.VIDEOGAMES ? (this.showGlobalSearch = true) : (this.showGlobalSearch = false);
  }

  selectProduct(a: any) {
    this.charge = a.charge;
  }
}
