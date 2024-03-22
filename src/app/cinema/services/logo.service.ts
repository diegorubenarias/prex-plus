import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  private LOGO = 'logo';


  constructor(
    private storageSrv: StorageService,

  ) { }

  public setLogo(logo: string) {
    this.storageSrv.set(this.LOGO, logo)
  }

  public async getLogo() {
    return await this.storageSrv.get(this.LOGO).then(logo => {
      if (!!logo) {
        return logo;
      } else {
        this.setLogo(environment.DEFAULT_LOGO)
        return environment.DEFAULT_LOGO;
      }
    })
  }
}
