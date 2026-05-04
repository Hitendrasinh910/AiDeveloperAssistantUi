import { Component } from '@angular/core';
import { AgentResponse } from '../models/agent-response.model';
import { AgentRequest } from '../models/agent-request.model';
import { AgentService } from '../services/agent.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agent',
  imports: [FormsModule],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss',
})
export class AgentComponent {
loading = false;
  errorMessage = '';
  response?: AgentResponse;

  request: AgentRequest = {
    mode: 'Debug Error',
    technology: 'ASP.NET Core Web API',
    topic: '',
    requirement: '',
    errorMessage: '',
    code: ''
  };

  modes = [
    'Debug Error',
    'Understand Topic',
    'Generate Code',
    'Improve Code',
    'SQL Help',
    'Code Review',
    'Performance Analysis',
    'Security Review'
  ];

  constructor(private agentService: AgentService) {}

  submit() {
    this.loading = true;
    this.errorMessage = '';
    this.response = undefined;

    this.agentService.process(this.request).subscribe({
      next: (res) => {
        this.loading = false;

        if (res.summary?.toLowerCase().includes('high demand')) {
          this.errorMessage = res.summary;
          return;
        }

        this.response = res;
      },
      error: () => {
        this.loading = false;
        this.errorMessage =
          'This model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again later.';
      }
    });
  }

  copyCode() {
    navigator.clipboard.writeText(this.response?.generatedCode || '');
  }
}
