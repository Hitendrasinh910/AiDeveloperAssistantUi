import { Routes } from '@angular/router';
import { AgentComponent } from './agent/agent/agent.component';
import { ChatComponent } from './agent/chat/chat.component';
import { FixProjectComponent } from './agent/fix-project/fix-project.component';

export const routes: Routes = [
    { path: '', redirectTo: 'agent', pathMatch: 'full' },
  { path: 'agent', component: AgentComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'fix-project', component: FixProjectComponent }
];
