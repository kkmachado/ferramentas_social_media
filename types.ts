export interface Tool {
  name: string;
  generalView: string;
  metricsCoverage: string;
  benchmarking: string;
  socialListening: string;
  brazilRelevance: string;
  analystVerdict: string;
}

export interface DecisionMatrixRow {
  name:string;
  kpiCoverage: number;
  benchmarking: number;
  socialListening: number;
  brazilFocus: number;
  costBenefit: number;
  idealProfile: string;
}

export interface RankedDecisionMatrixRow extends DecisionMatrixRow {
  totalScore: number;
}
