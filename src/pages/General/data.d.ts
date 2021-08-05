export interface GeneralItem {
  id: number;
  datasetid: string;
  source: string;
  project: string;
  // subproject: string;
  tissue: string;
  tissuegroup: string;
  phenotype: string;
  celltype: string;
  drug: string;
  total_reported_cell: number;
  celltype_num: number;
  cell_source: string;
  technique: string;
  doi: string;
  title: string;
}

export interface SearchKeywords {
  source: string | undefined;
  project: string | undefined;
  datasetid: string | undefined;
  tissue: string | undefined;
  tissuegroup: string | undefined;
  phenotype: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
  overlapgene: string | undefined;
  pcutoff: number | undefined;
  orcutoff: number | undefined;
}
