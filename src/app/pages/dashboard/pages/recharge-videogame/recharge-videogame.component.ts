import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RechargeVideogameComponent as Dialog } from '@pages/dashboard/components/recharge-videogame/recharge-videogame.component';

@Component({
  selector: 'app-recharge-videogame',
  templateUrl: './recharge-videogame.component.html',
  styleUrls: ['./recharge-videogame.component.scss'],
})
export class RechargeVideogameComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  recharge() {
    this.dialogService.open(Dialog, { header: 'RECARGAR VIDEOJUEGO', width: '100%', height: '100%' });
  }
}
