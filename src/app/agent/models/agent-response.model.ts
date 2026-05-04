export class AgentResponse {
    title!: string;
    summary!: string;
    explanation!: string;
    solution!: string;
    generatedCode!: string;
    keyPoints!: string[];
    nextSteps!: string[];
    score?: number;
    bugs!: string[];
    improvements!: string[];
    securityIssues!: string[];
}
