import { Effect, Reducer, Subscription } from '@@/plugin-dva/connect';

import { getRemoteKeywords, getRemoteList } from '@/pages/General/service';
import { GeneralItem, keywordsItem } from '@/pages/General/data';
import { message } from 'antd';

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
      return payload;
      // console.log(payload);
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
      return history.listen((location) => {
        if (
          location.pathname === '/general' ||
          location.pathname === '/browse'
        ) {
          dispatch({
            type: 'getRemote',
            //payload一般用于传输参数，即type指定函数的参数
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
