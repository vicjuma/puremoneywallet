import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PuremoneywalletService } from '../puremoneywallet';

@Injectable({
  providedIn: 'root'
})
export class HasPasswordGuard implements CanActivate {
  constructor(
    private router: Router,
    private service: PuremoneywalletService
  ) {}

  canActivate(): boolean {
    if (!this.service.wallet) {
      this.router.navigate(['password']);
      return false;
    }
    return true;
  }
}
