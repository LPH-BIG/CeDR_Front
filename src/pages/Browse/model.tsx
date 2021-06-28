import { SubprojectState } from '@/pages/Subproject/model';
import { getRemoteSubproject } from '@/pages/Subproject/service';
import { pathToRegexp } from 'path-to-regexp';
import { Effect, Reducer, Subscription } from '@@/plugin-dva/connect';

export interface BrowseModelType {
  namespace: 'browse';
  state: SubprojectState;
  reducers: {
    getList: Reducer<SubprojectState>;
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
          project,
          subproject,
          celltype,
          drug,
          overlapgene,
          pcutoff,
          orcutoff,
        },
      },
      { put, call },
    ) {
      const data = yield call(getRemoteSubproject, {
        pageIndex,
        pageSize,
        project,
        subproject,
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
export default BrowseModel;
