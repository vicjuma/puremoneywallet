import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PasswordComponent } from './ui/password/password.component';
import { GenerateComponent } from './ui/generate/generate.component';
import { DisplayComponent } from './ui/display/display.component';

import { HasPasswordGuard } from './ui/guards/has-password.guard';
import { HasKeystoreGuard } from './ui/guards/has-keystore.guard';

const routes: Routes = [
  { path: '', redirectTo: 'password', pathMatch: 'full' },
  { path: 'password', component: PasswordComponent, canActivate: [HasKeystoreGuard] },
  { path: 'display', component: DisplayComponent, canActivate: [HasPasswordGuard] },
  { path: 'generate', component: GenerateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
