export interface AssociationItem {
  id: number;
  datasetid: string;
  associationid: string;
  source: string;
  project: string;
  tissue: string;
  tissuegroup: string;
  phenotype: string;
  celltype: string;
  inst: string;
  drug: string;
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
  matrixplot: string;
  violinplot: string;
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
