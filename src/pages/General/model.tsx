import { Effect, Reducer, Subscription } from '@@/plugin-dva/connect';

import { getRemoteKeywords, getRemoteList } from '@/pages/General/service';
import { GeneralItem, keywordsItem } from '@/pages/General/data';
import { addRecord } from '@/pages/users/service';
import { message } from 'antd';

export interface GeneralState {
  data: GeneralItem[];
  // remoteKeywords:keywordsItem;
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
      console.log(payload);
    },
    // getListKeywords(state, { payload }) {
    //   console.log("getListKeywords");
    //   console.log(payload);
    //   return payload;
    // },
  },
  effects: {
    *getRemote(
      {
        payload: {
          pageIndex,
          pageSize,
          source,
          tissue,
          phenotype,
          celltype,
          inst,
        },
      },
      { put, call },
    ) {
      const data = yield call(getRemoteList, {
        pageIndex,
        pageSize,
        source,
        tissue,
        phenotype,
        celltype,
        inst,
      });
      if (data) {
        yield put({
          type: 'getList',
          payload: data,
        });
      }
      // console.log(data);
    },
    // *getKeywords({ payload: { keywords } }, { put, call }) {
    //   // console.log(keywords);
    //   console.log(Object.keys(keywords).length);
    //   if (Object.keys(keywords).length!=0){
    //     const source = keywords.source;
    //     const tissue = keywords.tissue;
    //     const celltype = keywords.celltype;
    //     const phenotype = keywords.phenotype;
    //     const inst = keywords.inst;
    //     const remoteKeywords = yield call(getRemoteKeywords, {
    //       source,
    //       tissue,
    //       phenotype,
    //       celltype,
    //       inst,
    //     });
    //     if (remoteKeywords) {
    //       yield put({
    //         type: 'getListKeywords',
    //         payload: remoteKeywords,
    //       });
    //     } else {
    //       message.success('getKeywords falied');
    //     }
    //   }
    //
    // },
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
