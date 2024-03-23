import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CinemaService } from '../../services/cinema.service';
import { LogoService } from '../../services/logo.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss', '../../theme/prex-theme.scss'],
})
export class SignUpPage implements OnInit {

  form!: FormGroup;
  hide = true;
  hideConfirm = true;
  logo!: string;

  toast: any;


  constructor(
    private fb: FormBuilder,
    private cinemaSRV: CinemaService,
    private logoSrv: LogoService,
    private toastController: ToastController,
    private route: Router
  ) { }


  ngOnInit() {
    this.logoSrv.getLogo().subscribe((logo: any) => {
      this.logo = logo
    });
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      emailConfirmation: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      passwordConfirmation: [null, [Validators.required]]

    });
    this.form.controls['emailConfirmation'].valueChanges.subscribe((value: any) => {
      if (this.form.get('email')?.value !== this.form.get('emailConfirmation')?.value) {
        this.form.controls['emailConfirmation'].setErrors({invalid: true});
      } else {
        this.form.controls['emailConfirmation'].setErrors(null);
      }

    });
    this.form.controls['passwordConfirmation'].valueChanges.subscribe((value: any) => {
      if (this.form.get('password')?.value !== this.form.get('passwordConfirmation')?.value) {
        this.form.controls['passwordConfirmation'].setErrors({invalid: true});
      } else {
        this.form.controls['passwordConfirmation'].setErrors(null);
      }

    });
  }

  invalidField(field: string) {
    return (
      this.form.controls[field].errors &&
      this.form.controls[field].touched
    );
  }

  createAccount() {
    this.cinemaSRV.signUp(
      this.form?.get('email')?.value,
      this.form?.get('password')?.value
    ).subscribe((result: any) => {
      if (result.error) {
        this.presentToast('top', result.message);
      } else {
        this.route.navigate([""]);
        this.presentToast('top', result.message);
      }

    });

  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  passwordMatch(c: AbstractControl): { invalid: boolean } {
    if (c.get('password')?.value !== c.get('confirm_password')?.value) {
      console.log('password not match');
        return {invalid: true};

    }
    return {invalid: false};
  }
}
