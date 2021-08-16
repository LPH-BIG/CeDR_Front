import { DatasetState } from '@/pages/Dataset/model';
import { getRemoteDataset } from '@/pages/Dataset/service';
import { pathToRegexp } from 'path-to-regexp';
import { Effect, Reducer, Subscription } from '@@/plugin-dva/connect';

export interface BrowseModelType {
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
const BrowseModel: BrowseModelType = {
  namespace: 'browse',
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
          associationid,
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
        associationid,
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
        const match = pathToRegexp('/browse/:type/:name').exec(
          location.pathname,
        );
        if (match) {
          const type = match[1];
          const name = match[2];
          console.log(type);
          console.log(name);
          switch (type) {
            case 'celltype': {
              dispatch({
                type: 'getRemote',
                //payload一般用于传输参数，即type指定函数的参数
                payload: {
                  pageIndex: 0,
                  pageSize: 0,
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
                  pageIndex: 0,
                  pageSize: 0,
                  drug: name,
                  pcutoff: 0.01,
                  pcutoff2: 0.01,
                  spcutoff: 0.01,
                },
              });
              break;
            }
            case 'phenotype': {
              dispatch({
                type: 'getRemote',
                //payload一般用于传输参数，即type指定函数的参数
                payload: {
                  pageIndex: 0,
                  pageSize: 0,
                  phenotype: name,
                  pcutoff: 0.01,
                  pcutoff2: 0.01,
                  spcutoff: 0.01,
                },
              });
              break;
            }
            case 'tissue': {
              dispatch({
                type: 'getRemote',
                //payload一般用于传输参数，即type指定函数的参数
                payload: {
                  pageIndex: 0,
                  pageSize: 0,
                  tissuegroup: name,
                  pcutoff: 0.01,
                  pcutoff2: 0.01,
                  spcutoff: 0.01,
                },
              });
              break;
            }
          }
        }
      });
    },
  },
};
export default BrowseModel;
