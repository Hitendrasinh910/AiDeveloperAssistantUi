import { Component } from '@angular/core';
import { AgentHistory, HistoryService } from '../services/history.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
histories: AgentHistory[] = [];
  selected?: AgentHistory;
  loading = false;
  errorMessage = '';

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory() {
    this.loading = true;

    this.historyService.getHistory().subscribe({
      next: res => {
        this.histories = res;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load history.';
        this.loading = false;
      }
    });
  }

  select(item: AgentHistory) {
    this.selected = item;
  }

  parseJson(value: string): any {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
}
