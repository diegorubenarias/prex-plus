import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CinemaService } from '../../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', '../../theme/prex-theme.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  form!: FormGroup;
  hide = true;
  public logo: string | null = null;

  constructor(
    private fb: FormBuilder,
    private cinemaSrv: CinemaService,
    private route: Router
  ) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.logo = this.cinemaSrv.getLogo();
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
    this.route.navigate(['home']);
  }

}
