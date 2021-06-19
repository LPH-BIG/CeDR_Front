import request, { extend } from 'umi-request';
import { message } from 'antd';

const errorHandler = function (error: any) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.status);
    console.log(error.data);
    if (error.response.status > 400) {
      message.error(error.data.message ? error.data.message : error.data);
    }
  } else {
    // The request was made but no response was received or error occurs when setting up the request.
    console.log(error.message);
    message.error('Network error');
  }

  throw error; // If throw. The error will continue to be thrown.
  // return {some: 'data'}; If return, return the value as a return. If you don't write it is equivalent to return undefined, you can judge whether the response has a value when processing the result.
  // return {some: 'data'};
};
const extendRequest = extend({ errorHandler });

export const getRemoteList = async (
  pageIndex: number | undefined,
  pageSize: number | undefined,
  source: string | undefined,
  project: string | undefined,
  subproject: string | undefined,
  tissue: string | undefined,
  phenotype: string | undefined,
) => {
  return extendRequest(`http://127.0.0.1:8887/api/general`, {
    method: 'get',
    params: {
      current: pageIndex,
      pageSize: pageSize,
      source: source,
      project: project,
      subproject: subproject,
      tissue: tissue,
      phenotype: phenotype,
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
  // source,
  project,
  subproject,
  celltype,
  drug,
  overlapgene,
}: {
  // source:string,
  project: string;
  subproject: string;
  celltype: string | undefined;
  drug: string | undefined;
  overlapgene: string | undefined;
}) => {
  return extendRequest(`http://127.0.0.1:8887/api/searchLike`, {
    method: 'get',
    params: {
      // source: source,
      project: project,
      subproject: subproject,
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

// export const getSelect = async ({
//   type,
//   name,
// }: {
//   type: string;
//   name: string;
// }) => {
//   return extendRequest(`http://127.0.0.1:8887/api/select`, {
//     method: 'get',
//     params: {
//       type: type,
//       name: name,
//     },
//   })
//     .then(function (response) {
//       // console.log(response);
//       return response;
//     })
//     .catch(function (error) {
//       return false;
//     });
// };

export const getRemoteGeneralKeywords = async ({
  source,
  project,
  subproject,
  tissue,
  phenotype,
  celltype,
  drug,
}: {
  source: string | undefined;
  project: string | undefined;
  subproject: string | undefined;
  tissue: string | undefined;
  phenotype: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
}) => {
  return extendRequest(`http://127.0.0.1:8887/api/generalLike`, {
    method: 'get',
    params: {
      source: source,
      project: project,
      subproject: subproject,
      tissue: tissue,
      phenotype: phenotype,
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
