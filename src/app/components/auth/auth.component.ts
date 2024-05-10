import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    TabViewModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    CalendarModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  date: Date|undefined;
}
