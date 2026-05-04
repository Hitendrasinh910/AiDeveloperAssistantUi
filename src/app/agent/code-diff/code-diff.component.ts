import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface DiffItem {
  type: 'added' | 'removed' | 'changed';
  originalLine: string;
  newLine: string;
  lineNumber: number;
}

@Component({
  selector: 'app-code-diff',
  imports: [FormsModule, NgClass],
  templateUrl: './code-diff.component.html',
  styleUrl: './code-diff.component.scss',
})
export class CodeDiffComponent {
  @Input() diffItems?: DiffItem[] = [];
}
