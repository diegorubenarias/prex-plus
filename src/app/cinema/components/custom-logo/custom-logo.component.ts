import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LogoService } from '../../services/logo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-logo',
  templateUrl: './custom-logo.component.html',
  styleUrls: ['./custom-logo.component.scss'],
})
export class CustomLogoComponent  implements OnInit, OnDestroy {

  logos!: any[];


  constructor(
    private logoSrv: LogoService,
    private router: Router
  ) { }


  ngOnInit() {
    this.logos=environment.APP_LOGOS
  }

  selectLogo(logoUrl: string) {
    this.logoSrv.setLogo(logoUrl);
    this.router.navigate(["/"]);
  }

  ngOnDestroy(): void {}

}
