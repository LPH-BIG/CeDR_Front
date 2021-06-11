import { Effect, Reducer, Subscription } from '@@/plugin-dva/connect';

import { getRemoteList } from '@/pages/General/service';
import { GeneralItem } from '@/pages/General/data';

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
    // edit: Effect;
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
    },
  },
  effects: {
    *getRemote({ payload: { pageIndex, pageSize } }, { put, call }) {
      const data = yield call(getRemoteList, { pageIndex, pageSize });
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
