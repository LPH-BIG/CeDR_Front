import { extendRequest } from '@/pages/General/service';
import { API_PREFIX } from '@/common/constants';
export const getSelect = async ({
  type,
  name,
}: {
  type: string;
  name: string | undefined;
}) => {
  return extendRequest(API_PREFIX + '/select', {
    method: 'get',
    params: {
      type: type,
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
