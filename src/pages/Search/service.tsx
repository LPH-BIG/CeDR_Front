import { extendRequest } from '@/pages/General/service';

export const getRemoteTypeKeywords = async (name: string | undefined) => {
  return extendRequest(`http://127.0.0.1:8887/api/keyword`, {
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
