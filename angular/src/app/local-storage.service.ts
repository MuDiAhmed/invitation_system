import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from "ngx-webstorage-service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  public set(key: string, value: any): void {
    this.storage.set(key, value);
  }

  public get(key: string){
    return this.storage.get(key);
  }
}
