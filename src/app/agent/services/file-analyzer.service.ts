import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProjectFixResponse {
  title: string;
  summary: string;
  projectIssues: string[];
  architectureIssues: string[];
  securityIssues: string[];
  recommendedFixes: string[];
  refactoredCodeSuggestion: string;
  score: number;
}


@Injectable({
  providedIn: 'root',
})
export class FileAnalyzerService {
  private apiUrl = 'https://localhost:7093/api/File';

  constructor(private http: HttpClient) {}

  analyzeProject(files: File[]): Observable<ProjectFixResponse> {
    const formData = new FormData();

    files.forEach(file => {
      formData.append('files', file);
    });

    return this.http.post<ProjectFixResponse>(
      `${this.apiUrl}/analyze-project`,
      formData
    );
  }
}
