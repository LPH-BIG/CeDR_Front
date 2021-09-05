import { extendRequest } from '@/pages/General/service';
import { API_PREFIX } from '@/common/constants';
export interface multipleKeywordsItem {
  source: string | undefined;
  tissuegroup: string | undefined;
  phenotype: string | undefined;
  celltype: string | undefined;
  drug: string | undefined;
}
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
