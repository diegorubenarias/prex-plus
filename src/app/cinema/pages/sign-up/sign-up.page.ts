import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss', '../../theme/prex-theme.scss'],
})
export class SignUpPage implements OnInit, OnDestroy {

  form!: FormGroup;
  hide = true;
  hideConfirm = true;

  constructor(
    private fb: FormBuilder
  ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      emailConfirmation: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      passwordConfirmation: [null, [Validators.required]]
    })
  }

  invalidField(field: string) {
    return (
      this.form.controls[field].errors &&
      this.form.controls[field].touched
    );
  }

  createAccount() {

  }

}
