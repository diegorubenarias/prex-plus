import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CinemaService } from '../../services/cinema.service';
import { Router } from '@angular/router';
import { LogoService } from '../../services/logo.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', '../../theme/prex-theme.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;
  hide = true;
  public logo: string | null = null;

  constructor(
    private fb: FormBuilder,
    private cinemaSrv: CinemaService,
    private logoSrv: LogoService,
    private route: Router,
    private toastController: ToastController,
  ) { }

   ngOnInit() {
    this.logoSrv.getLogo().subscribe((logo: any) => this.logo = logo);
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }

  invalidField(field: string) {
    return (
      this.form.controls[field].errors &&
      this.form.controls[field].touched
    );
  }

  login() {
    this.cinemaSrv.login(this.form.get('email')?.value, this.form.get('password')?.value)
    .subscribe((res:any) => {
      if(res.success) {
        this.route.navigate(['home']);
      } else {
        this.presentToast('top', res.message);
      }
    })

  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
