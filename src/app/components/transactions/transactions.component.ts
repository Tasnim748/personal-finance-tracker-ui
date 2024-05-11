import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { TableComponent } from '../table/table.component';
import { Expense } from '../../interfaces/product';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    MenuModule,
    TableModule,
    TableComponent
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  items: MenuItem[] | undefined = [
    {
      label: 'Documents',
      items: [
        {
          label: 'New',
          icon: 'pi pi-plus',
        },
        {
          label: 'Search',
          icon: 'pi pi-search',
        },
      ],
    },
    {
      label: 'Profile',
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-cog',
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
        },
      ],
    },
  ];


  expenses: Expense[] = [
    {
      id: 30,
      title: 'My Expense last',
      dueDate: '2024-05-09',
      budget: 1200,
      paid: 1000,
      due: 0,
      category: 'living',
      categoryRef: 2,
      person: 'Jakir Tasnim',
      personRef: 4,
      complete: false,
      planned: false
    },
    {
      id: 32,
      title: 'My Expense Fast',
      dueDate: '2024-05-09',
      budget: 1200,
      paid: 1000,
      due: 200,
      category: 'living',
      categoryRef: 2,
      person: 'Jakir Tasnim',
      personRef: 4,
      complete: false,
      planned: false
    },
    {
      id: 29,
      title: 'My Expense last',
      dueDate: '2024-05-09',
      budget: 1200,
      paid: 1000,
      due: 0,
      category: 'living',
      categoryRef: 2,
      person: 'Jakir Tasnim',
      personRef: 4,
      complete: true,
      planned: false
    },
    {
      id: 33,
      title: 'My Expense last',
      dueDate: '2024-05-09',
      budget: 1200,
      paid: 1000,
      due: 200,
      category: 'living',
      categoryRef: 2,
      person: 'Jakir Tasnim',
      personRef: 4,
      complete: false,
      planned: false
    },
    {
      id: 35,
      title: 'My Expense last',
      dueDate: '2024-05-09',
      budget: 1200,
      paid: 1000,
      due: 200,
      category: 'living',
      categoryRef: 2,
      person: 'Jakir Tasnim',
      personRef: 4,
      complete: true,
      planned: false
    }
  ]
}
