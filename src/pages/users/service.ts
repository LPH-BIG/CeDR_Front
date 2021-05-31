import { message } from 'antd';
import request, { extend } from 'umi-request';

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

// 1. Unified processing
const extendRequest = extend({ errorHandler });

export const getRemoteList = async ({ page, per_page }) => {
  return extendRequest(`http://public-api-v1.aspirantzhang.com/users`, {
    method: 'get',
    params: {
      page: page,
      per_page: per_page,
    },
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};
export const editRecord = async ({
  id,
  values,
}: {
  id: number;
  values: any;
}) => {
  return extendRequest(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
    method: 'put',
    data: values,
  })
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      return false;
    });
};

export const deleteRecord = async ({ id }: { id: number }) => {
  return extendRequest(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
    method: 'delete',
  })
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      return false;
    });
};

export const addRecord = async ({ values }: { values: any }) => {
  return extendRequest(`http://public-api-v1.aspirantzhang.com/users/`, {
    method: 'post',
    data: values,
  })
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      return false;
    });
};
