import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AgentHistory {
  id: number;
  mode: string;
  requestJson: string;
  responseJson: string;
  createdOn: string;
}

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
   private apiUrl = 'https://localhost:7161/api/History';

  constructor(private http: HttpClient) {}

  getHistory(): Observable<AgentHistory[]> {
    return this.http.get<AgentHistory[]>(this.apiUrl);
  }
}
