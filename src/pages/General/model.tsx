import { Effect, Reducer, Subscription } from '@@/plugin-dva/connect';

import { getRemoteKeywords, getRemoteList } from '@/pages/General/service';
import { GeneralItem, keywordsItem } from '@/pages/General/data';
import { message } from 'antd';
import { pathToRegexp } from 'path-to-regexp';
import { history } from 'umi';
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
    // getListKeywords:Reducer<GeneralState>
  };
  effects: {
    getRemote: Effect;
    // getKeywords: Effect;
    // delete: Effect;
    // add: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const GeneralModel: GeneralModelType = {
  namespace: 'general',
  state: {
    data: [],
    // remoteKeywords: {},
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
          subproject,
          tissue,
          phenotype,
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
        subproject,
        tissue,
        phenotype,
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
        const match = pathToRegexp('/general/:type/:name').exec(
          location.pathname,
        );
        if (match) {
          const type = match[1];
          const name = match[2];
          switch (type) {
            case 'source': {
              dispatch({
                type: 'getRemote',
                //payload一般用于传输参数，即type指定函数的参数
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
                //payload一般用于传输参数，即type指定函数的参数
                payload: {
                  pageIndex: 1,
                  pageSize: 10,
                  tissue: name,
                },
              });
              break;
            }
            case 'phenotype': {
              dispatch({
                type: 'getRemote',
                //payload一般用于传输参数，即type指定函数的参数
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
                //payload一般用于传输参数，即type指定函数的参数
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
                //payload一般用于传输参数，即type指定函数的参数
                payload: {
                  pageIndex: 1,
                  pageSize: 10,
                  drug: name,
                },
              });
              break;
            }
          }
        } else {
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
