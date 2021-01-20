import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PuremoneywalletService } from '../puremoneywallet';

@Component({
  selector: 'puremoneywallet-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  public passwordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: PuremoneywalletService,
    private router: Router
  ) { }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: ['', Validators.required]
    });
  }

  public async login() {
    try {
      const password = this.passwordForm.get('password').value;
      await this.service.login(password);
      this.router.navigate(['display']);
    } catch (err) {
      console.log(err);
      this.router.navigate(['password']);
    }
  }
}
