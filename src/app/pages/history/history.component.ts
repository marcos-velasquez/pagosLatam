import { Component, OnInit } from '@angular/core';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { BalancesService } from '@models/balances/services/balances.service';
import { StreamingService } from '@models/streaming/services/streaming.service';
import { VideoGamesService } from '@models/videogames/services/videogames.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  cols: { header: string; field: string }[] = [];
  data: any[] = [];
  showGlobalSearch = false;

  constructor(
    private toast: ToastService,
    private balancesService: BalancesService,
    private streamingService: StreamingService,
    private videoGamesService: VideoGamesService
  ) {}

  ngOnInit(): void {
    this.onBalances();
  }

  setData(data: any) {
    this.data = data;
  }

  onBalances = () => {
    this.balancesService
      .getAllByCurrentUser()
      .then((balances) => {
        this.cols = [{ header: 'TELÉFONO DESTINO', field: 'phoneTarget' }];
        this.setData(balances);
      })
      .catch((error) => this.toast.error(error.code));
  };

  onStreaming = () => {
    this.streamingService
      .getAllByCurrentUser()
      .then((streaming) => {
        this.cols = [];
        this.setData(streaming);
      })
      .catch((error) => this.toast.error(error.code));
  };

  onVideoGames = () => {
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
}
