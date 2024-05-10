import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionsComponent } from './components/transactions/transactions.component';
import { LoansComponent } from './components/loans/loans.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {path: 'transactions', component: TransactionsComponent},
  {path: 'loans', component: LoansComponent},
  {path: "profile", component: ProfileComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
