import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
sessionId?: number;
  message = '';
  loading = false;

  messages: { role: string; content: string }[] = [
    {
      role: 'assistant',
      content: 'Hi! Ask me anything about .NET, Angular, SQL, errors, or architecture.'
    }
  ];

  constructor(private chatService: ChatService) {}

  send() {
    if (!this.message.trim()) return;

    const userMessage = this.message;

    this.messages.push({
      role: 'user',
      content: userMessage
    });

    this.message = '';
    this.loading = true;

    this.chatService.send({
      sessionId: this.sessionId,
      message: userMessage
    }).subscribe({
      next: res => {
        this.sessionId = res.sessionId;

        this.messages.push({
          role: 'assistant',
          content: res.reply
        });

        this.loading = false;
      },
      error: () => {
        this.messages.push({
          role: 'assistant',
          content: 'This model is currently experiencing high demand. Please try again later.'
        });

        this.loading = false;
      }
    });
  }
}
