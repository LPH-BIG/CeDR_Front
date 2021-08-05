import { extendRequest } from '@/pages/General/service';
import { API_PREFIX } from '@/common/constants';
export const getRemoteDataset = async ({
  pageIndex,
  pageSize,
  // project,
  datasetid,
  celltype,
  drug,
  overlapgene,
  pcutoff,
  orcutoff,
}: {
  pageIndex: number | undefined;
  pageSize: number | undefined;
  // project: string | undefined;
  datasetid: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
  overlapgene: string | undefined;
  pcutoff: number | undefined;
  orcutoff: number | undefined;
}) => {
  return extendRequest(API_PREFIX + '/dataset', {
    method: 'get',
    params: {
      pageIndex: pageIndex,
      pageSize: pageSize,
      // project: project,
      datasetid: datasetid,
      celltype: celltype,
      drug: drug,
      overlapgene: overlapgene,
      pcutoff: pcutoff,
      orcutoff: orcutoff,
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