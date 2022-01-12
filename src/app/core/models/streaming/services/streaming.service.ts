import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Status } from '@core/enums/status.enum';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { Streaming } from '../interfaces/streaming.interface';

@Injectable({
  providedIn: 'root',
})
export class StreamingService {
  private basePath = 'streaming';

  constructor(private firestore: Firestore, private auth: AuthenticationService) {}

  create(streaming: Streaming) {
    streaming.status = Status.PENDING;
    const ref = collection(this.firestore, 'users/' + this.auth.id + '/' + this.basePath);
    return addDoc(ref, streaming);
  }
}
