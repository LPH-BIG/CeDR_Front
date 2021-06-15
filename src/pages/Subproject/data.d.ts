export interface SubprojectItem {
  id: number;
  source: string;
  project: string;
  subproject: string;
  // description: string;
  tissue: string;
  phenotype: string;
  celltype: string;
  inst: string;
  pvalue1: number;
  oddsratio1: number;
  pvalue2: number;
  oddsratio2: number;
  spearman: number;
  spvalue: number;
  overlapgenenum: number;
  overlapgene: string;
}
