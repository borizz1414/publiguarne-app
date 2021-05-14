import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  fieldTextType: any;
  constructor(private fb: FormBuilder,
              // tslint:disable-next-line: variable-name
              private _auth: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void{
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void{
    // this._auth.login(this.formLogin).subscribe((resp: any) => {
    //   this.router.navigate(['/inicio/directorio']);
    // });
    this.router.navigate(['/inicio/directorio']);

  }
  showPassword(): void{
  this.fieldTextType = !this.fieldTextType;
  }
}
