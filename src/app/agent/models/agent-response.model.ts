export interface DiffItem {
  type: 'added' | 'removed' | 'changed';
  originalLine: string;
  newLine: string;
  lineNumber: number;
}

export class AgentResponse {
  title?: string;
  summary?: string;
  explanation?: string;
  solution?: string;
  generatedCode?: string;
  keyPoints?: string[];
  nextSteps?: string[];
  score?: number;
  bugs?: string[];
  improvements?: string[];
  securityIssues?: string[];
  diffItems!: DiffItem[];
}