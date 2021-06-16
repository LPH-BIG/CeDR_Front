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

export const getRemoteSubproject = async ({
  pageIndex,
  pageSize,
  project,
  subproject,
}) => {
  return extendRequest(`http://127.0.0.1:8887/api/search`, {
    method: 'get',
    params: {
      pageIndex: pageIndex,
      pageSize: pageSize,
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
