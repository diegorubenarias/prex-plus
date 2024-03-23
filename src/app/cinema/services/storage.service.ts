import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(
    private storage: Storage,
  ) { }

  init(): Observable<any> {
    return from(this.storage.create().then(st => this._storage = st));
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public async get(key: string) {
    return await this._storage?.get(key);
  }
}
