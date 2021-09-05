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
          source,
          datasetid,
          associationid,
          celltype,
          drug,
          tissuegroup,
          phenotype,
          overlapgene,
          pcutoff,
          orcutoff,
          pcutoff2,
          orcutoff2,
          spcutoff,
          spearman,
        },
      },
      { put, call },
    ) {
      const data = yield call(getRemoteDataset, {
        pageIndex,
        pageSize,
        source,
        datasetid,
        associationid,
        celltype,
        drug,
        tissuegroup,
        phenotype,
        overlapgene,
        pcutoff,
        orcutoff,
        pcutoff2,
        orcutoff2,
        spcutoff,
        spearman,
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
        const match1 = pathToRegexp('/browse/:type/:name').exec(
          location.pathname,
        );
        const match2 = pathToRegexp(
          '/browse/source/:name1/tissue/:name2/phenotype/:name3/cellltype/:name4/drug/:name5',
        ).exec(location.pathname);
        if (match1) {
          const type = match1[1];
          const name = match1[2];
          console.log(type);
          console.log(name);
          switch (type) {
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
                  pageIndex: 1,
                  pageSize: 10,
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
                  pageIndex: 1,
                  pageSize: 10,
                  tissuegroup: name,
                  pcutoff: 0.01,
                  pcutoff2: 0.01,
                  spcutoff: 0.01,
                },
              });
              break;
            }
          }
        } else if (match2) {
          const source = match2[1] != 'undefined' ? match2[1] : undefined;
          const tissue = match2[2] != 'undefined' ? match2[2] : undefined;
          const phenotype = match2[3] != 'undefined' ? match2[3] : undefined;
          const cellltype = match2[4] != 'undefined' ? match2[4] : undefined;
          const drug = match2[5] != 'undefined' ? match2[5] : undefined;
          dispatch({
            type: 'getRemote',
            //payload一般用于传输参数，即type指定函数的参数
            payload: {
              pageIndex: 1,
              pageSize: 10,
              source: source,
              tissuegroup: tissue,
              phenotype: phenotype,
              celltype: cellltype,
              drug: drug,
              // pcutoff: 0.01,
              // pcutoff2: 0.01,
              // spcutoff: 0.01,
            },
          });
        }
      });
    },
  },
};
export default BrowseModel;
