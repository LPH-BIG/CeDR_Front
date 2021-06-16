export interface GeneralItem {
  id: number;
  source: string;
  project: string;
  subproject: string;
  description: string;
  tissue: string;
  phenotype: string;
  celltype: string;
  drug: string;
  reference: string;
}

export interface keywordsItem {
  source: string[];
  tissue: string[];
  phenotype: string[];
  celltype: string[];
  inst: string[];
}
