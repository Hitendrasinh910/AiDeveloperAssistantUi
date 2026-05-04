import { Component } from '@angular/core';
import { FileAnalyzerService, ProjectFixResponse } from '../services/file-analyzer.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-fix-project',
  imports: [DecimalPipe],
  templateUrl: './fix-project.component.html',
  styleUrl: './fix-project.component.scss',
})
export class FixProjectComponent {
  selectedFiles: File[] = [];
  response?: ProjectFixResponse;
  loading = false;
  errorMessage = '';

  constructor(private fileService: FileAnalyzerService) {}

  onFilesSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  analyzeProject() {
    if (this.selectedFiles.length === 0) {
      this.errorMessage = 'Please select project files.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.fileService.analyzeProject(this.selectedFiles).subscribe({
      next: res => {
        this.response = res;
        this.loading = false;
      },
      error: () => {
        this.errorMessage =
          'This model is currently experiencing high demand. Please try again later.';
        this.loading = false;
      }
    });
  }
}
