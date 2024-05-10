import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Location } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements OnInit {

  constructor(private location: Location) {}
  
  ngOnInit(): void {}

  items: MenuItem[] = [
    {
      label: 'Transactions',
      icon: 'pi pi-star',
      routerLink: 'transactions',
    },
    {
      label: 'Loans',
      icon: 'pi pi-search',
      routerLink: "loans",
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      routerLink: "profile",
    },
    {
      label: 'Auth',
      routerLink: 'auth'
    }
  ];

  clickFunc() {
    console.log(this.location.path())
  }
}
