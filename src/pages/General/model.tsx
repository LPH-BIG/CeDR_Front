import { Effect, Reducer, Subscription } from 'umi';

import { getRemoteList } from '@/pages/General/service';
import { GeneralItem } from '@/pages/General/data';
import { pathToRegexp } from 'path-to-regexp';
export interface GeneralState {
  data: GeneralItem[];
  meta: {
    total: number;
    pageSize: number;
    pageIndex: number;
  };
  status: number;
  message: string;
}

interface GeneralModelType {
  namespace: 'general';
  state: GeneralState;
  reducers: {
    getList: Reducer<GeneralState>;
  };
  effects: {
    getRemote: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const GeneralModel: GeneralModelType = {
  namespace: 'general',
  state: {
    data: [],
    meta: {
      total: 10,
      pageSize: 10,
      pageIndex: 1,
    },
    status: 200,
    message: 'success',
  },
  reducers: {
    getList(state, { payload }) {
      // console.log(payload);
      return payload;
    },
  },
  effects: {
    *getRemote(
      {
        payload: {
          pageIndex,
          pageSize,
          source,
          project,
          tissue,
          tissuegroup,
          phenotype,
          celltype,
          drug,
        },
      },
      { put, call },
    ) {
      const data = yield call(
        getRemoteList,
        pageIndex,
        pageSize,
        source,
        project,
        tissue,
        tissuegroup,
        phenotype,
        celltype,
        drug,
      );
      if (data) {
        yield put({
          type: 'getList',
          payload: data,
        });
      }
      // console.log(data);
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const match1 = pathToRegexp('/general/:type/:name').exec(
          location.pathname,
        );
        const match2 = pathToRegexp(
          '/general/:type1/:name1/:type2/:name2/:type3/:name3',
        ).exec(location.pathname);
        if (match1) {
          const type = match1[1];
          const name = match1[2];
          switch (type) {
            case 'source': {
              dispatch({
                type: 'getRemote',
                //payload??????????????????????????????type?????????????????????
                payload: {
                  pageIndex: 1,
                  pageSize: 10,
                  source: name,
                },
              });
              break;
            }
            case 'tissue': {
              dispatch({
                type: 'getRemote',
                //payload??????????????????????????????type?????????????????????
                payload: {
                  pageIndex: 1,
                  pageSize: 10,
                  tissuegroup: name,
                },
              });
              break;
            }
            case 'phenotype': {
              dispatch({
                type: 'getRemote',
                //payload??????????????????????????????type?????????????????????
                payload: {
                  pageIndex: 1,
                  pageSize: 10,
                  phenotype: name,
                },
              });
              break;
            }
            case 'celltype': {
              dispatch({
                type: 'getRemote',
                //payload??????????????????????????????type?????????????????????
                payload: {
                  pageIndex: 1,
                  pageSize: 10,
                  celltype: name,
                },
              });
              break;
            }
            case 'drug': {
              dispatch({
                type: 'getRemote',
                //payload??????????????????????????????type?????????????????????
                payload: {
                  pageIndex: 1,
                  pageSize: 10,
                  drug: name,
                },
              });
              break;
            }
          }
        } else if (match2) {
          const type1 = match2[1];
          const name1 = match2[2];
          const type2 = match2[3];
          const name2 = match2[4];
          const type3 = match2[5];
          const name3 = match2[6];
          if (type1 == 'source' && type2 == 'tissue' && type3 == 'phenotype') {
            dispatch({
              type: 'getRemote',
              payload: {
                pageIndex: 1,
                pageSize: 10,
                source: name1,
                tissuegroup: name2,
                phenotype: name3,
              },
            });
          }
        } else if (location.pathname === '/general') {
          dispatch({
            type: 'getRemote',
            payload: {
              pageIndex: 1,
              pageSize: 10,
            },
          });
        }
      });
    },
  },
};
export default GeneralModel;
