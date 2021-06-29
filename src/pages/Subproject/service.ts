import { extendRequest } from '@/pages/General/service';
import { API_PREFIX } from '@/common/constants';
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
  return extendRequest(API_PREFIX + '/subproject', {
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
  return extendRequest(API_PREFIX + '/general', {
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
  return extendRequest(API_PREFIX + '/tsne', {
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
  celltype,
  drug,
}: {
  project: string | undefined;
  subproject: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
}) => {
  return extendRequest(API_PREFIX + '/network', {
    method: 'get',
    params: {
      project: project,
      subproject: subproject,
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
export const getRemotePie = async ({ name }: { name: string }) => {
  return extendRequest(API_PREFIX + '/pie', {
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
