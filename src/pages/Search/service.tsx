import { extendRequest } from '@/pages/General/service';
import { API_PREFIX } from '@/common/constants';
export const getRemoteTypeKeywords = async (name: string | undefined) => {
  return extendRequest(API_PREFIX + '/keyword', {
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
