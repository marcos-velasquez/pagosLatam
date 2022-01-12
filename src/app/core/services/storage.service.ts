import { Injectable } from '@angular/core';
import { ref, Storage, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  upload(file: File) {
    return new Promise((resolve, reject) => {
      uploadBytes(ref(this.storage, uuidv4()), file)
        .then(({ metadata }) => {
          getDownloadURL(ref(this.storage, metadata.name)).then(resolve).catch(reject);
        })
        .catch(reject);
    });
  }
}
