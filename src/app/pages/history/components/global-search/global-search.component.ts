import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideoGamesService } from '@models/videogames/services/videogames.service';
import { VideoGame } from '@models/videogames/interfaces/videogame.interface';
import { ToastService } from '@core/components/prime-ng/services/toast.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<VideoGame[]>();
  form: FormGroup;
  constructor(private fb: FormBuilder, private videoGamesService: VideoGamesService, private toast: ToastService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      playerId: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.videoGamesService
        .getAllWhere(this.form.value)
        .then((videogames) => {
          this.onSearch.emit(videogames);
        })
        .catch((error) => this.toast.error(error.code));
    }
  }
}
