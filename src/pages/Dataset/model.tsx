import { Effect, Reducer, Subscription } from 'umi';
import { AssociationItem } from '@/pages/Dataset/data';
import { getRemoteDataset } from '@/pages/Dataset/service';
import { pathToRegexp } from 'path-to-regexp';

export interface DatasetState {
  data: AssociationItem[];
  meta: {
    total: number;
    pageSize: number;
    pageIndex: number;
  };
  status: number;
  message: string;
}
export interface DatasetModelType {
  namespace: string;
  state: DatasetState;
  reducers: {
    getList: Reducer<DatasetState>;
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
const DatasetModel: DatasetModelType = {
  namespace: 'dataset',
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
      // console.log(payload);
    },
  },
  effects: {
    *getRemote(
      {
        payload: {
          pageIndex,
          pageSize,
          datasetid,
          celltype,
          drug,
          overlapgene,
          pcutoff,
          orcutoff,
        },
      },
      { put, call },
    ) {
      const data = yield call(getRemoteDataset, {
        pageIndex,
        pageSize,
        datasetid,
        celltype,
        drug,
        overlapgene,
        pcutoff,
        orcutoff,
      });
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
        const match = pathToRegexp('/dataset/:id').exec(location.pathname);
        if (match) {
          const id = match[1];
          // console.log(id);
          // const project = id.split(' ')[0];
          // const datasetid = id
          //   .split(' ')
          //   .slice(1, id.split(' ').length)
          //   .join(' ');
          dispatch({
            type: 'getRemote',
            payload: {
              pageIndex: 1,
              pageSize: 10,
              datasetid: id,
            },
          });
        }
      });
    },
  },
};
export default DatasetModel;
