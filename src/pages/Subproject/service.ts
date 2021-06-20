import { extendRequest } from '@/pages/General/service';

export const getRemoteSubproject = async ({
  pageIndex,
  pageSize,
  project,
  subproject,
  celltype,
  drug,
  overlapgene,
  pcutoff,
  orcutoff,
}: {
  pageIndex: number | undefined;
  pageSize: number | undefined;
  project: string | undefined;
  celltype: string | undefined;
  subproject: string | undefined;
  drug: string | undefined;
  overlapgene: string | undefined;
  pcutoff: number | undefined;
  orcutoff: number | undefined;
}) => {
  return extendRequest(`http://127.0.0.1:8887/api/subproject`, {
    method: 'get',
    params: {
      pageIndex: pageIndex,
      pageSize: pageSize,
      project: project,
      subproject: subproject,
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
  project,
  subproject,
}: {
  project: string;
  subproject: string;
}) => {
  return extendRequest(`http://127.0.0.1:8887/api/general`, {
    method: 'get',
    params: {
      project: project,
      subproject: subproject,
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

export const getRemoteTsne = async ({ name }: { name: string }) => {
  return extendRequest(`http://127.0.0.1:8887/api/tsne`, {
    method: 'get',
    params: {
      name: name,
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
  project,
  subproject,
}: {
  project: string;
  subproject: string;
}) => {
  return extendRequest(`http://127.0.0.1:8887/api/network`, {
    method: 'get',
    params: {
      project: project,
      subproject: subproject,
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
export const getRemotePie = async ({ name }: { name: string }) => {
  return extendRequest(`http://127.0.0.1:8887/api/pie`, {
    method: 'get',
    params: {
      name: name,
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
  return extendRequest(`http://127.0.0.1:8887/api/gene`, {
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
  return extendRequest(`http://127.0.0.1:8887/api/drug`, {
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
