import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Recharge } from '@app/models/core/components/recharge.component';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { StorageService } from '@core/services/storage.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { ConfirmationService } from 'primeng/api';
import { VideoGamesService } from '../../services/videogames.service';
import { VideoGame } from './../../interfaces/videogame.interface';

@Component({
  selector: 'app-recharge-videogame',
  templateUrl: './recharge-videogame.component.html',
  styleUrls: ['./recharge-videogame.component.scss'],
})
export class RechargeVideogameComponent extends Recharge<VideoGame> implements OnInit {
  constructor(
    private fb: FormBuilder,
    override storageService: StorageService,
    override toast: ToastService,
    override auth: AuthenticationService,
    override confirmationService: ConfirmationService,
    videoGamesService: VideoGamesService
  ) {
    super(storageService, auth, videoGamesService, toast, confirmationService);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      reference: ['', Validators.required],
      photo: ['', Validators.required],
      charge: [[], Validators.required],
      playerId: ['', Validators.required],
      additionalField: ['', Validators.required],
    });

    this.patchDefaultValues();
  }
}
