import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgentComponent } from "./agent/agent/agent.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AgentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AiDeveloperAssistantUi');
}
