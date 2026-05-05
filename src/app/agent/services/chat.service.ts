import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ChatRequest {
  sessionId?: number;
  message: string;
}

export interface ChatResponse {
  sessionId: number;
  reply: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://localhost:7161/api/Chat';

  constructor(private http: HttpClient) {}

  send(request: ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(`${this.apiUrl}/send`, request);
  }
}
