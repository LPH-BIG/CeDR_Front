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
  photocelltype: string;
  photodrug: string;
}
export interface AssociationItem {
  id: number;
  source: string;
  project: string;
  subproject: string;
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
  overlapgenerank: number[];
  photocelltype: string;
  photodrug: string;
}
export interface DrugItem {
  id: number;
  inst: string;
  batch_id: string;
  name: string;
  inn1: string;
  concentration: number;
  duration: number;
  cell: string;
  array: string;
  perturbation_scan_id: string;
  vehicle_scan_id: string;
  scanner: string;
  vehicle: string;
  vendor: string;
  catalog_number: string;
  catalog_name: string;
}
