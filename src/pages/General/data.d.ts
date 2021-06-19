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
export interface SearchKeywords {
  source: string | undefined;
  project: string | undefined;
  subproject: string | undefined;
  tissue: string | undefined;
  phenotype: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
  overlapgene: string | undefined;
  pcutoff: number | undefined;
  orcutoff: number | undefined;
}
export interface SelectKeywords {
  source: string | undefined;
  project: string | undefined;
  subproject: string | undefined;
  tissue: string | undefined;
  phenotype: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
}
