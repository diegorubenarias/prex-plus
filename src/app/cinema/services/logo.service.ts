import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { Observable, from } from 'rxjs';

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

  public getLogo(): Observable<any> {
    return from(this.storageSrv.get(this.LOGO).then(logo => {
      if (!!logo) {
        return logo;
      } else {
        this.setLogo(environment.DEFAULT_LOGO)
        return environment.DEFAULT_LOGO;
      }
    }))
  }
}
