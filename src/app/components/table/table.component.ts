import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { Expense } from '../../interfaces/product';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, TooltipModule, ConfirmDialogModule, ToastModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class TableComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  @Input() expenses: Expense[] = [];

  confirmComplete(event: Event, id: number, title: string) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed for ' + title + ' (' + id + ')',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }
}
