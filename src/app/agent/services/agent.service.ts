import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgentRequest } from '../models/agent-request.model';
import { AgentResponse } from '../models/agent-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  private apiUrl = 'https://localhost:7161/api/Agent';

  constructor(private http: HttpClient) {}

  process(request: AgentRequest): Observable<AgentResponse> {
    return this.http.post<AgentResponse>(`${this.apiUrl}/process`, request);
  }
}
