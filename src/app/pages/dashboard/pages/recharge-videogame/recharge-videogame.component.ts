import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/components/prime-ng/services/dialog.service';
import { RechargeVideogameComponent as Dialog } from '@app/models/videogames/components/recharge-videogame/recharge-videogame.component';

@Component({
  selector: 'app-recharge-videogame',
  templateUrl: './recharge-videogame.component.html',
  styleUrls: ['./recharge-videogame.component.scss'],
})
export class RechargeVideogameComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  recharge() {
    this.dialogService.open(Dialog, 'RECARGAR VIDEOJUEGOS');
  }
}
