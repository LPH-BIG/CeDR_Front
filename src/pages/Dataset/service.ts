import { extendRequest } from '@/pages/General/service';
import { API_PREFIX } from '@/common/constants';
export const getRemoteDataset = async ({
  pageIndex,
  pageSize,
  datasetid,
  associationid,
  celltype,
  drug,
  tissuegroup,
  phenotype,
  overlapgene,
  pcutoff,
  orcutoff,
  pcutoff2,
  orcutoff2,
  spcutoff,
  spearman,
}: {
  pageIndex: number | undefined;
  pageSize: number | undefined;
  datasetid: string | undefined;
  associationid: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
  tissuegroup: string | undefined;
  phenotype: string | undefined;
  overlapgene: string | undefined;
  pcutoff: number | undefined;
  orcutoff: number | undefined;
  pcutoff2: number | undefined;
  orcutoff2: number | undefined;
  spcutoff: number | undefined;
  spearman: number | undefined;
}) => {
  return extendRequest(API_PREFIX + '/dataset', {
    method: 'get',
    params: {
      pageIndex: pageIndex,
      pageSize: pageSize,
      datasetid: datasetid,
      associationid: associationid,
      celltype: celltype,
      drug: drug,
      tissuegroup: tissuegroup,
      phenotype: phenotype,
      overlapgene: overlapgene,
      pcutoff: pcutoff,
      orcutoff: orcutoff,
      pcutoff2: pcutoff2,
      orcutoff2: orcutoff2,
      spcutoff: spcutoff,
      spearman: spearman,
    },
  })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const getRemoteSummary = async ({
  datasetid,
}: {
  // project: string;
  datasetid: string;
}) => {
  return extendRequest(API_PREFIX + '/general', {
    method: 'get',
    params: {
      datasetid: datasetid,
    },
  })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const getRemoteTsne = async ({ datasetid }: { datasetid: string }) => {
  return extendRequest(API_PREFIX + '/tsne', {
    method: 'get',
    params: {
      datasetid: datasetid,
    },
  })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const getRemoteNetwork = async ({
  // project,
  datasetid,
  celltype,
  drug,
}: {
  // project: string | undefined;
  datasetid: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
}) => {
  return extendRequest(API_PREFIX + '/network', {
    method: 'get',
    params: {
      // project: project,
      datasetid: datasetid,
      celltype: celltype,
      drug: drug,
      pcutoff: 0.01,
      pcutoff2: 0.01,
      spcutoff: 0.01,
    },
  })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      return false;
    });
};
export const getRemotePie = async ({ datasetid }: { datasetid: string }) => {
  return extendRequest(API_PREFIX + '/pie', {
    method: 'get',
    params: {
      datasetid: datasetid,
    },
  })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const getRemoteGene = async ({ name }: { name: string }) => {
  return extendRequest(API_PREFIX + '/gene', {
    method: 'get',
    params: {
      symbol: name,
    },
  })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const getRemoteDrug = async ({ name }: { name: string }) => {
  return extendRequest(API_PREFIX + '/drug', {
    method: 'get',
    params: {
      inst: name,
    },
  })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      return false;
    });
};
export const getRemoteKeywords = async ({
  datasetid,
  celltype,
  drug,
  overlapgene,
}: {
  datasetid: string;
  celltype: string | undefined;
  drug: string | undefined;
  overlapgene: string | undefined;
}) => {
  return extendRequest(API_PREFIX + '/searchLike', {
    method: 'get',
    params: {
      datasetid: datasetid,
      cellType: celltype,
      drug: drug,
      overlapgene: overlapgene,
    },
  })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      return false;
    });
};
